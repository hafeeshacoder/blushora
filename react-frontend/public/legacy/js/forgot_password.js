// forgot_password.js
// Passwords are reset by an administrator. This page sends the request to the
// server, which notifies the administrators and shows the instructions below.

const FORGOT_API_URL = window.__API_URL__ || "http://localhost:3001/api/v1";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("forgotPasswordForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", requestPasswordReset);
});

async function requestPasswordReset(event) {
    event.preventDefault();

    const emailField = document.getElementById("email");
    const button = document.getElementById("resetBtn");
    const email = emailField.value.trim().toLowerCase();

    if (email === "") {
        alert("Please enter your registered Email.");
        emailField.focus();
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid Email Address.");
        emailField.focus();
        return;
    }

    button.disabled = true;

    try {
        const response = await fetch(FORGOT_API_URL + "/auth/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            alert(data.message || "Unable to send your request. Please try again.");
            return;
        }

        showNotice(data.message);
        emailField.value = "";
    } catch (error) {
        alert("Unable to reach the server. Please make sure the backend is running.");
    } finally {
        button.disabled = false;
    }
}

function showNotice(text) {
    const form = document.getElementById("forgotPasswordForm");
    let notice = document.getElementById("forgotNotice");

    if (!notice) {
        notice = document.createElement("p");
        notice.id = "forgotNotice";
        notice.className = "auth__lead";
        notice.setAttribute("role", "status");
        form.after(notice);
    }

    notice.textContent = text;
}
