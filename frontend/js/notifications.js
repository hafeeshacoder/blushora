// notifications.js
// Additive, read-only enhancement for the student dashboard. Runs after
// student_dashboard.js and shows any approval/rejection notices an
// administrator has sent (written by manage_enrollment.js). If there is
// nothing to show, it leaves student_dashboard.js's own "No notifications
// available" message exactly as it is.

(function () {
    var student = JSON.parse(localStorage.getItem("loggedInStudent") || "null");
    if (!student) return;

    var container = document.getElementById("notificationContainer");
    if (!container) return;

    var key = student.email + "_notifications";
    var notifications = JSON.parse(localStorage.getItem(key) || "[]");
    if (!notifications.length) return;

    function escapeHtml(text) {
        var div = document.createElement("div");
        div.textContent = text == null ? "" : String(text);
        return div.innerHTML;
    }

    var html = notifications.map(function (n) {
        var tone = n.type === "approved" ? "success" : n.type === "rejected" ? "danger" : "info";
        return (
            '<div class="notice notice--' + tone + '">' +
                '<p class="notice__message">' + escapeHtml(n.message) + "</p>" +
                '<p class="notice__date">' + escapeHtml(n.date) + "</p>" +
            "</div>"
        );
    }).join("");

    html += '<button type="button" id="clearNotificationsBtn" class="btn btn--ghost btn--sm">Clear notifications</button>';

    container.innerHTML = html;

    var clearBtn = document.getElementById("clearNotificationsBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", function () {
            localStorage.removeItem(key);
            container.innerHTML = '<p class="muted-note">No notifications available.</p>';
        });
    }
})();
