// password-toggle.js
// Adds a show/hide (eye) button to every password field on every page.
// It watches the page, so fields added later by React are handled too.
(function () {
    var EYE_OPEN =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
        '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path>' +
        '<circle cx="12" cy="12" r="3"></circle></svg>';

    var EYE_CLOSED =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
        '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>' +
        '<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>' +
        '<path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>' +
        '<line x1="2" y1="2" x2="22" y2="22"></line></svg>';

    var BUTTON_SIZE = 32;

    var style = document.createElement("style");
    style.textContent =
        ".pw-toggle{position:absolute;right:8px;width:" + BUTTON_SIZE + "px;height:" + BUTTON_SIZE + "px;" +
        "display:flex;align-items:center;justify-content:center;padding:0;border:0;border-radius:6px;" +
        "background:transparent;color:inherit;opacity:.7;cursor:pointer;z-index:2}" +
        ".pw-toggle:hover,.pw-toggle:focus-visible{opacity:1}" +
        ".pw-toggle:focus-visible{outline:2px solid currentColor;outline-offset:1px}" +
        ".pw-toggle svg{width:18px;height:18px}" +
        "input[data-pw-toggle]{padding-right:44px !important}";
    document.head.appendChild(style);

    function placeButton(input, button) {
        var parent = input.parentElement;
        if (!parent) return;

        if (window.getComputedStyle(parent).position === "static") {
            parent.style.position = "relative";
        }

        // Centre the button vertically on the input
        button.style.top = (input.offsetTop + (input.offsetHeight - BUTTON_SIZE) / 2) + "px";
    }

    function attach(input) {
        if (input.dataset.pwToggle || !input.parentElement) return;

        input.dataset.pwToggle = "1";

        var button = document.createElement("button");
        button.type = "button";
        button.className = "pw-toggle";
        button.innerHTML = EYE_OPEN;
        button.setAttribute("aria-label", "Show password");
        button.setAttribute("aria-pressed", "false");

        button.addEventListener("click", function () {
            var showing = input.type === "password";

            input.type = showing ? "text" : "password";
            button.innerHTML = showing ? EYE_CLOSED : EYE_OPEN;
            button.setAttribute("aria-label", showing ? "Hide password" : "Show password");
            button.setAttribute("aria-pressed", showing ? "true" : "false");
            input.focus();
        });

        input.parentElement.appendChild(button);
        placeButton(input, button);
    }

    function scan() {
        document.querySelectorAll('input[type="password"]').forEach(attach);
    }

    function repositionAll() {
        document.querySelectorAll("input[data-pw-toggle]").forEach(function (input) {
            var button = input.parentElement && input.parentElement.querySelector(".pw-toggle");
            if (button) placeButton(input, button);
        });
    }

    scan();
    window.addEventListener("resize", repositionAll);
    window.addEventListener("load", function () { scan(); repositionAll(); });

    new MutationObserver(function () { scan(); }).observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
    });

    document.addEventListener("DOMContentLoaded", function () { scan(); repositionAll(); });
})();
