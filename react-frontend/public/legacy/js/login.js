import { logoutUser } from "./auth.js";
import { validateEmail, validatePassword } from "./validation.js";
import { showMessage, redirectTo } from "./ui.js";

let currentRole = "student";

//==========================================
// API LOGIN (Express + MongoDB + JWT)
//==========================================
const API_URL = window.__API_URL__ || "http://localhost:3001/api/v1";

async function authenticate(role, email, password) {
    const invalid = role === "admin"
        ? "Invalid Administrator Email or Password."
        : "Invalid Student Email or Password.";

    let response;
    let data = {};

    try {
        response = await fetch(API_URL + "/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        data = await response.json().catch(() => ({}));
    } catch (error) {
        return {
            success: false,
            message: "Unable to reach the server. Please make sure the backend is running."
        };
    }

    if (!response.ok) {
        return {
            success: false,
            message: response.status === 401 ? invalid : (data.message || "Login failed.")
        };
    }

    const user = data.student;

    // A student cannot sign in through the administrator tab, and vice versa
    if ((role === "admin") !== (user.role === "admin")) {
        return { success: false, message: invalid };
    }

    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("role", user.role);

    if (user.role === "admin") {
        localStorage.removeItem("loggedInStudent");
        localStorage.setItem("loggedInAdmin", JSON.stringify({
            id: user.id, adminName: user.name, name: user.name,
            email: user.email, role: "Admin"
        }));
        return { success: true, message: "Administrator Login Successful.", user };
    }

    // Keep the per-student learning data the existing pages store locally
    const students = JSON.parse(localStorage.getItem("students") || "[]");
    let record = students.find((s) => s.email === user.email);

    if (!record) {
        record = {
            enrolledCourses: [], completedCourses: [], certificates: [],
            progress: {}, registrationDate: new Date().toLocaleDateString(),
            lastLogin: "", active: true
        };
        students.push(record);
    }

    Object.assign(record, {
        id: user.id,
        studentName: user.name,
        name: user.name,
        studentId: user.studentId || record.studentId || "",
        email: user.email,
        department: user.department || record.department || "",
        role: "Student",
        lastLogin: new Date().toLocaleString()
    });

    localStorage.setItem("students", JSON.stringify(students));
    localStorage.removeItem("loggedInAdmin");
    localStorage.setItem("loggedInStudent", JSON.stringify(record));

    return { success: true, message: "Student Login Successful.", user };
}

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
async function loginUser() {
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.getElementById("password").value.trim();

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

    const result = await authenticate(currentRole, email, password);

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
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    logoutUser(currentRole);
    showMessage("Logged Out Successfully.");
    redirectTo("login.html");
}

window.logout = logout;