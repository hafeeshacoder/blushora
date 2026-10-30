// admin_register.js
// Creates administrator accounts in MongoDB through the API.
// The server only accepts registration when the correct invite code is given.

const ADMIN_API_URL = window.__API_URL__ || "http://localhost:3001/api/v1";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adminRegisterForm");

    if (!form) {
        console.error("Admin Registration Form Not Found.");
        return;
    }

    form.addEventListener("submit", registerAdmin);
});

async function registerAdmin(event) {
    event.preventDefault();

    const adminName = document.getElementById("adminName").value.trim();
    const adminId = document.getElementById("adminId").value.trim();
    const adminEmail = document.getElementById("adminEmail").value.trim().toLowerCase();
    const designation = document.getElementById("designation").value;
    const password = document.getElementById("adminPassword").value;
    const confirmPassword = document.getElementById("adminConfirmPassword").value;
    const inviteCode = document.getElementById("adminInviteCode").value.trim();
    const button = document.getElementById("adminBtn");

    if (adminName.length < 3) {
        alert("Administrator Name must contain at least 3 characters.");
        document.getElementById("adminName").focus();
        return;
    }

    if (adminId === "") {
        alert("Please enter Administrator ID.");
        document.getElementById("adminId").focus();
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminEmail)) {
        alert("Please enter a valid Email Address.");
        document.getElementById("adminEmail").focus();
        return;
    }

    if (designation === "") {
        alert("Please select a Designation.");
        document.getElementById("designation").focus();
        return;
    }

    if (password.length < 12) {
        alert("Password must contain at least 12 characters.");
        document.getElementById("adminPassword").focus();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        document.getElementById("adminConfirmPassword").focus();
        return;
    }

    if (inviteCode === "") {
        alert("Please enter the Administrator Invite Code.");
        document.getElementById("adminInviteCode").focus();
        return;
    }

    button.disabled = true;

    try {
        const response = await fetch(ADMIN_API_URL + "/auth/register-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: adminName,
                email: adminEmail,
                password,
                inviteCode,
                adminId,
                designation
            })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            const details = Array.isArray(data.errors) && data.errors.length
                ? data.errors.map((item) => item.message || item).join("\n")
                : data.message || "Administrator registration failed.";
            alert(details);
            return;
        }

        alert("Administrator Registration Successful! Please log in.");
        document.getElementById("adminRegisterForm").reset();
        window.location.href = "/login";
    } catch (error) {
        alert("Unable to reach the server. Please make sure the backend is running.");
    } finally {
        button.disabled = false;
    }
}
