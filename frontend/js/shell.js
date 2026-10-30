// shell.js
// Purely additive UI behavior for the redesigned shell: mobile sidebar
// toggle and populating the topbar "signed in as" chip. Does not touch
// any existing app logic, storage keys, or event handlers.

(function () {
    function readUser() {
        try {
            var student = JSON.parse(localStorage.getItem("loggedInStudent"));
            if (student) return { name: student.studentName || student.name || student.email, role: "Student" };
        } catch (e) {}
        try {
            var admin = JSON.parse(localStorage.getItem("loggedInAdmin"));
            if (admin) return { name: admin.adminName || admin.name || admin.email, role: "Administrator" };
        } catch (e) {}
        return null;
    }

    function initials(name) {
        if (!name) return "";
        var parts = String(name).trim().split(/\s+/);
        var chars = parts.slice(0, 2).map(function (p) { return p.charAt(0).toUpperCase(); });
        return chars.join("") || "";
    }

    function populateUserChip() {
        var chip = document.querySelector("[data-user-chip]");
        if (!chip) return;
        var user = readUser();
        if (!user) return;
        var nameEl = chip.querySelector("[data-user-name]");
        var roleEl = chip.querySelector("[data-user-role]");
        var initialsEl = chip.querySelector("[data-user-initials]");
        if (nameEl) nameEl.textContent = user.name || "";
        if (roleEl) roleEl.textContent = user.role;
        if (initialsEl) initialsEl.textContent = initials(user.name);
        chip.hidden = false;
    }

    function initNavToggle() {
        var toggle = document.querySelector("[data-nav-toggle]");
        var closers = document.querySelectorAll("[data-nav-close]");
        if (!toggle) return;

        function close() {
            document.body.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        }
        function open() {
            document.body.classList.add("nav-open");
            toggle.setAttribute("aria-expanded", "true");
        }

        toggle.addEventListener("click", function () {
            if (document.body.classList.contains("nav-open")) close();
            else open();
        });
        closers.forEach(function (el) {
            el.addEventListener("click", close);
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") close();
        });
    }

    var COLLAPSE_KEY = "eduBloomSidebarCollapsed";

    function initCollapseToggle() {
        var shell = document.getElementById("appShell");
        var btn = document.getElementById("collapseToggle");
        if (!shell || !btn) return;

        var collapsed = false;
        try {
            collapsed = localStorage.getItem(COLLAPSE_KEY) === "1";
        } catch (e) {}

        function apply(state) {
            shell.classList.toggle("is-collapsed", state);
            btn.setAttribute("aria-expanded", String(!state));
            btn.setAttribute("aria-label", state ? "Expand sidebar" : "Collapse sidebar");
            btn.querySelector("span").textContent = state ? "Expand" : "Collapse";
        }

        apply(collapsed);
        // Clear the pre-paint class now that the real toggle owns the state.
        document.documentElement.classList.remove("sidebar-collapsed-init");

        btn.addEventListener("click", function () {
            collapsed = !collapsed;
            apply(collapsed);
            try {
                localStorage.setItem(COLLAPSE_KEY, collapsed ? "1" : "0");
            } catch (e) {}
        });
    }

    function init() {
        initNavToggle();
        initCollapseToggle();
        populateUserChip();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
