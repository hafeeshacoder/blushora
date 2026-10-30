// admin-student-tools.js
// Student Accounts panel on the admin dashboard:
// - lists students from the database
// - resets a student's password (new password is sent to their messages)
// - exports students as a CSV file
(function () {
    var API_URL = window.__API_URL__ || "http://localhost:3001/api/v1";
    var table = document.getElementById("studentAccountsTable");
    var exportButton = document.getElementById("exportStudentsBtn");
    var statusText = document.getElementById("studentAccountsStatus");

    if (!table || !exportButton) {
        return;
    }

    var students = [];

    function idOf(student) {
        return String(student.id || student._id);
    }

    function authHeaders() {
        return { Authorization: "Bearer " + (sessionStorage.getItem("token") || "") };
    }

    function escapeHtml(value) {
        return String(value === undefined || value === null ? "" : value).replace(/[&<>"']/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char];
        });
    }

    function setStatus(text) {
        if (statusText) {
            statusText.textContent = text;
        }
    }

    function describeError(error, fallback) {
        return error instanceof TypeError
            ? "Unable to reach the server. Please make sure the backend is running."
            : (error && error.message) || fallback;
    }

    function renderRows() {
        if (students.length === 0) {
            table.innerHTML = '<tr><td colspan="5">No students registered yet.</td></tr>';
            return;
        }

        table.innerHTML = students.map(function (student) {
            return (
                "<tr>" +
                "<td>" + escapeHtml(student.name) + "</td>" +
                "<td>" + escapeHtml(student.email) + "</td>" +
                "<td>" + escapeHtml(student.studentId || "-") + "</td>" +
                "<td>" + escapeHtml(student.department || "-") + "</td>" +
                '<td><button type="button" class="btn btn--outline btn--sm" data-reset-id="' +
                escapeHtml(idOf(student)) + '">Reset Password</button></td>' +
                "</tr>"
            );
        }).join("");
    }

    async function loadStudents() {
        try {
            var response = await fetch(API_URL + "/students", { headers: authHeaders() });
            var data = await response.json().catch(function () { return {}; });

            if (!response.ok) {
                throw new Error(data.message || "Could not load students.");
            }

            students = data.students || [];
            renderRows();
        } catch (error) {
            table.innerHTML = '<tr><td colspan="5">' + escapeHtml(describeError(error, "Could not load students.")) + "</td></tr>";
        }
    }

    // Shows the new password in a selectable box with a Copy button
    function showPasswordBox(name, password) {
        var box = document.getElementById("newPasswordBox");

        if (!box) {
            box = document.createElement("div");
            box.id = "newPasswordBox";
            box.setAttribute("role", "region");
            box.setAttribute("aria-label", "New password");
            box.style.cssText = "margin:12px 0;padding:14px;border:1px solid currentColor;border-radius:10px;";
            table.closest(".panel__body").insertBefore(box, table.closest(".table-wrap"));
        }

        box.innerHTML =
            '<p><strong>New password for ' + escapeHtml(name) + ':</strong></p>' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
            '<input type="text" readonly id="newPasswordValue" value="' + escapeHtml(password) + '" ' +
            'style="font-family:monospace;font-size:16px;padding:8px 10px;min-width:240px;" aria-label="New password">' +
            '<button type="button" class="btn btn--primary btn--sm" id="copyNewPasswordBtn">Copy</button>' +
            '<button type="button" class="btn btn--outline btn--sm" id="closeNewPasswordBtn">Close</button>' +
            '</div>' +
            '<p class="panel__sub">This password has also been sent to the student\'s messages.</p>';

        var input = document.getElementById("newPasswordValue");
        var copyBtn = document.getElementById("copyNewPasswordBtn");
        var closeBtn = document.getElementById("closeNewPasswordBtn");

        input.addEventListener("focus", function () { input.select(); });

        copyBtn.addEventListener("click", async function () {
            var copied = false;

            try {
                await navigator.clipboard.writeText(input.value);
                copied = true;
            } catch (error) {
                // Fallback for browsers that block the clipboard API
                input.select();
                copied = document.execCommand("copy");
            }

            copyBtn.textContent = copied ? "Copied!" : "Press Ctrl+C";
            setTimeout(function () { copyBtn.textContent = "Copy"; }, 2000);
        });

        closeBtn.addEventListener("click", function () {
            box.remove();
        });

        input.focus();
        input.select();
    }

    async function resetPassword(id) {
        var student = students.find(function (item) { return idOf(item) === id; });
        var name = student ? student.name : "this student";

        if (!confirm("Reset the password for " + name + "? A new password will be sent to their messages.")) {
            return;
        }

        try {
            var response = await fetch(API_URL + "/students/" + encodeURIComponent(id) + "/reset-password", {
                method: "POST",
                headers: authHeaders()
            });
            var data = await response.json().catch(function () { return {}; });

            if (!response.ok) {
                throw new Error(data.message || "Password reset failed.");
            }

            showPasswordBox(name, data.password);
            setStatus("Password reset for " + name + ". It is included in the next export.");
        } catch (error) {
            alert(describeError(error, "Password reset failed."));
        }
    }

    async function exportStudents() {
        exportButton.disabled = true;

        try {
            var response = await fetch(API_URL + "/students/export", { headers: authHeaders() });

            if (!response.ok) {
                var data = await response.json().catch(function () { return {}; });
                throw new Error(data.message || "Export failed.");
            }

            var blob = await response.blob();
            var link = document.createElement("a");
            var date = new Date().toISOString().slice(0, 10);

            link.href = URL.createObjectURL(blob);
            link.download = "students-" + date + ".csv";
            document.body.appendChild(link);
            link.click();
            link.remove();
            setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
        } catch (error) {
            alert(describeError(error, "Export failed."));
        } finally {
            exportButton.disabled = false;
        }
    }

    table.addEventListener("click", function (event) {
        var button = event.target.closest("[data-reset-id]");

        if (button) {
            resetPassword(button.getAttribute("data-reset-id"));
        }
    });

    exportButton.addEventListener("click", exportStudents);

    loadStudents();
})();
