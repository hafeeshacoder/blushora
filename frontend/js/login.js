import { loginUser as authenticate, logoutUser } from "./auth.js";
import { validateEmail, validatePassword } from "./validation.js";
import { showMessage, redirectTo } from "./ui.js";

let currentRole = "student";

//==========================================
// PAGE LOAD
//==========================================
document.addEventListener("DOMContentLoaded", () => {
    showStudent();

    const studentBtn = document.getElementById("studentBtn");
    const adminBtn = document.getElementById("adminBtn");
    const loginBtn = document.querySelector(".login-btn");

    if (studentBtn) studentBtn.addEventListener("click", showStudent);
    if (adminBtn) adminBtn.addEventListener("click", showAdmin);
    if (loginBtn) loginBtn.addEventListener("click", loginUser);
});

//==========================================
// STUDENT TAB
//==========================================
function showStudent() {
    currentRole = "student";

    document.getElementById("role").textContent = "Student Login";
    document.getElementById("studentBtn").classList.add("active");
    document.getElementById("adminBtn").classList.remove("active");

    document.getElementById("registerTitle").textContent = "New Student?";
    document.getElementById("registerText").textContent = "Don't have a student account?";
    document.getElementById("registerLink").textContent = "Student Register";
    document.getElementById("registerLink").href = "student_register.html";
}

//==========================================
// ADMIN TAB
//==========================================
function showAdmin() {
    currentRole = "admin";

    document.getElementById("role").textContent = "Administrator Login";
    document.getElementById("adminBtn").classList.add("active");
    document.getElementById("studentBtn").classList.remove("active");

    document.getElementById("registerTitle").textContent = "New Administrator?";
    document.getElementById("registerText").textContent = "Don't have an administrator account?";
    document.getElementById("registerLink").textContent = "Administrator Register";
    document.getElementById("registerLink").href = "admin_register.html";
}

//==========================================
// LOGIN
//==========================================
function loginUser() {
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (email === "") {
        showMessage("Please enter Email.");
        return;
    }
    if (!validateEmail(email)) {
        showMessage("Enter a valid Email Address.");
        return;
    }
    if (password === "") {
        showMessage("Please enter Password.");
        return;
    }
    if (!validatePassword(password)) {
        showMessage("Password must contain at least 6 characters.");
        return;
    }

    const result = authenticate(currentRole, email, password);

    if (!result.success) {
        showMessage(result.message);
        return;
    }

    showMessage(result.message);

    if (currentRole === "student") {
        redirectTo("student_dashboard.html");
    } else {
        redirectTo("admin_dashboard.html");
    }
}

//==========================================
// ENTER KEY LOGIN
//==========================================
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        loginUser();
    }
});

//==========================================
// AUTO LOGIN CHECK
//==========================================
(function () {
    const student = localStorage.getItem("loggedInStudent");
    const admin = localStorage.getItem("loggedInAdmin");

    if (student && window.location.pathname.includes("login.html")) {
        console.log("Student session available.");
    }
    if (admin && window.location.pathname.includes("login.html")) {
        console.log("Admin session available.");
    }
})();

//==========================================
// LOGOUT
//==========================================
function logout() {
    logoutUser(currentRole);
    showMessage("Logged Out Successfully.");
    redirectTo("login.html");
}

window.logout = logout;