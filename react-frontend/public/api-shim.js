/*
 * Compatibility layer for the existing page scripts.
 *
 * They call "http://localhost:3001/api/courses" and expect a bare array / bare
 * course object. The Express API now lives at <API_URL>/courses, requires a JWT
 * for admin writes and wraps data as { courses } / { course }. This shim
 * rewrites those calls, adds the Authorization header, and unwraps the reply so
 * the page scripts keep working unchanged.
 */
(function () {
    var base = window.__API_URL__;
    if (!base || String(base).indexOf("%") !== -1) {
        base = "http://localhost:3001/api/v1";
    }
    window.__API_URL__ = String(base).replace(/\/+$/, "");

    var LEGACY_COURSES = /^https?:\/\/[^\/]+\/api\/courses(\/[^?#\/]+)?(\?[^#]*)?$/;
    var nativeFetch = window.fetch.bind(window);

    window.fetch = function (input, init) {
        var url = typeof input === "string" ? input : input && input.url;
        var match = typeof url === "string" ? url.match(LEGACY_COURSES) : null;

        if (!match) {
            return nativeFetch(input, init);
        }

        var options = Object.assign({}, init);
        var headers = new Headers(options.headers || {});
        var token = null;
        try { token = sessionStorage.getItem("token"); } catch (e) {}
        if (token) headers.set("Authorization", "Bearer " + token);
        options.headers = headers;

        var method = (options.method || "GET").toUpperCase();
        var isList = !match[1];
        var target = window.__API_URL__ + "/courses" + (match[1] || "") + (match[2] || "");

        return nativeFetch(target, options).then(function (response) {
            if (!response.ok || method === "DELETE") return response;

            return response.json().then(function (data) {
                var body = isList && method === "GET" ? data.courses : data.course;
                return new Response(JSON.stringify(body === undefined ? data : body), {
                    status: response.status,
                    headers: { "Content-Type": "application/json" }
                });
            });
        });
    };

    // Clear the JWT whenever any Logout button is pressed (capture phase, so it
    // runs before each page's own logout handler redirects away).
    document.addEventListener("click", function (event) {
        var target = event.target;
        if (target && target.closest && target.closest("#logoutBtn")) {
            try {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("role");
            } catch (e) {}
        }
    }, true);
})();
