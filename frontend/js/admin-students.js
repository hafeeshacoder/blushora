// admin-students.js
// Additive admin feature: lets an administrator permanently remove a
// student's account (and their course/enrollment data) from the system.
// This is a new, separate script — it does not modify any existing
// enrollment-management logic, it only adds a new panel's behavior.

(function () {
    var select = document.getElementById("removeStudentEmail");
    var btn = document.getElementById("removeStudentBtn");
    var status = document.getElementById("removeStudentStatus");
    if (!select || !btn) return;

    function loadStudents() {
        var students = JSON.parse(localStorage.getItem("students") || "[]");
        if (!students.length) {
            select.innerHTML = '<option value="">No registered students</option>';
            return;
        }
        var options = ['<option value="">Select a student…</option>'];
        students.forEach(function (s) {
            var name = s.studentName || s.name || s.email;
            options.push('<option value="' + s.email + '">' + name + " (" + s.email + ")</option>");
        });
        select.innerHTML = options.join("");
    }

    loadStudents();

    btn.addEventListener("click", function () {
        var email = select.value;
        if (!email) {
            alert("Please select a student to remove.");
            return;
        }
        if (!confirm("This will permanently remove this student's account, login, and all of their course data. This cannot be undone. Continue?")) {
            return;
        }

        // Remove the account itself — this revokes their login, since
        // login checks the "students" list for a matching email.
        var students = JSON.parse(localStorage.getItem("students") || "[]");
        students = students.filter(function (s) { return s.email !== email; });
        localStorage.setItem("students", JSON.stringify(students));

        // Clean up the student's own course/notification data.
        localStorage.removeItem(email + "_enrolledCourses");
        localStorage.removeItem(email + "_notifications");

        // Remove their enrollment requests from the admin-facing list.
        var enrollments = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
        enrollments = enrollments.filter(function (e) { return e.studentEmail !== email; });
        localStorage.setItem("enrolledCourses", JSON.stringify(enrollments));

        // If this student happens to be logged in on this browser, end
        // that session too.
        var logged = JSON.parse(localStorage.getItem("loggedInStudent") || "null");
        if (logged && logged.email === email) {
            localStorage.removeItem("loggedInStudent");
        }

        if (status) {
            status.textContent = "Removed " + email + ". They will need to register again to log in.";
        }
        loadStudents();
    });
})();
