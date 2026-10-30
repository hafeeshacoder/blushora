//=====================================================
// ADMIN REGISTRATION
// admin_register.js
//=====================================================

document.addEventListener("DOMContentLoaded", () => {

    initializeAdminRegistration();

});

//=====================================================
// INITIALIZE PAGE
//=====================================================

function initializeAdminRegistration() {

    const form = document.getElementById("adminRegisterForm");

    if (!form) {

        console.error("Admin Registration Form Not Found.");

        return;

    }

    form.addEventListener("submit", registerAdmin);

}

//=====================================================
// REGISTER ADMIN
//=====================================================

function registerAdmin(event) {

    event.preventDefault();

    //-----------------------------------------
    // GET VALUES
    //-----------------------------------------

    const adminName =
        document.getElementById("adminName").value.trim();

    const adminId =
        document.getElementById("adminId").value.trim();

    const adminEmail =
        document.getElementById("adminEmail").value.trim();

    const designation =
        document.getElementById("designation").value;

    const password =
        document.getElementById("adminPassword").value;

    const confirmPassword =
        document.getElementById("adminConfirmPassword").value;

    //-----------------------------------------
    // VALIDATION
    //-----------------------------------------

    if (adminName === "") {

        alert("Please enter Administrator Name.");

        document.getElementById("adminName").focus();

        return;

    }

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

    if (adminId.length < 4) {

        alert("Administrator ID is too short.");

        document.getElementById("adminId").focus();

        return;

    }

    if (adminEmail === "") {

        alert("Please enter Email Address.");

        document.getElementById("adminEmail").focus();

        return;

    }

    if (!validateEmail(adminEmail)) {

        alert("Please enter a valid Email Address.");

        document.getElementById("adminEmail").focus();

        return;

    }

    if (designation === "") {

        alert("Please select Designation.");

        document.getElementById("designation").focus();

        return;

    }

    if (password === "") {

        alert("Please enter Password.");

        document.getElementById("adminPassword").focus();

        return;

    }

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        document.getElementById("adminPassword").focus();

        return;

    }

    if (confirmPassword === "") {

        alert("Please confirm your Password.");

        document.getElementById("adminConfirmPassword").focus();

        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        document.getElementById("adminConfirmPassword").focus();

        return;

    }

    //-----------------------------------------
    // LOCAL STORAGE
    //-----------------------------------------

    let admins =
        JSON.parse(localStorage.getItem("admins")) || [];

    //-----------------------------------------
    // CHECK EMAIL
    //-----------------------------------------

    const emailExists = admins.some(admin =>
        admin.email.toLowerCase() ===
        adminEmail.toLowerCase()
    );

    if (emailExists) {

        alert("Email already registered.");

        document.getElementById("adminEmail").focus();

        return;

    }

    //-----------------------------------------
    // CHECK ADMIN ID
    //-----------------------------------------

    const idExists = admins.some(admin =>
        admin.adminId === adminId
    );

    if (idExists) {

        alert("Administrator ID already exists.");

        document.getElementById("adminId").focus();

        return;

    }

    //-----------------------------------------
    // CREATE ADMIN OBJECT
    //-----------------------------------------

    const newAdmin = {

        adminName: adminName,

        adminId: adminId,

        email: adminEmail,

        designation: designation,

        password: password,

        role: "Administrator",

        createdCourses: [],

        managedStudents: [],

        managedEnrollments: [],

        registrationDate:
            new Date().toLocaleDateString(),

        lastLogin: "",

        active: true

    };

    //-----------------------------------------
    // SAVE ADMIN
    //-----------------------------------------

    admins.push(newAdmin);

    localStorage.setItem(
        "admins",
        JSON.stringify(admins)
    );

    //-----------------------------------------
    // Registration does not start a session.
    // The administrator must log in with their
    // new credentials on the Login page.
    //-----------------------------------------

    //-----------------------------------------
    // SUCCESS
    //-----------------------------------------

    alert("Administrator Registration Successful!");

    //-----------------------------------------
    // RESET FORM
    //-----------------------------------------

    document.getElementById("adminRegisterForm").reset();

    //-----------------------------------------
    // REDIRECT
    //-----------------------------------------

    window.location.href = "login.html";

}
//=====================================================
// EMAIL VALIDATION
//=====================================================

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}

//=====================================================
// PASSWORD STRENGTH
//=====================================================

const passwordField =
    document.getElementById("adminPassword");

if (passwordField) {

    passwordField.addEventListener("keyup", () => {

        const password = passwordField.value;

        if (password.length === 0) {

            passwordField.style.borderColor = "var(--border-soft)";

        }

        else if (password.length < 6) {

            passwordField.style.borderColor = "red";

        }

        else if (password.length < 8) {

            passwordField.style.borderColor = "orange";

        }

        else {

            passwordField.style.borderColor = "green";

        }

    });

}

//=====================================================
// CONFIRM PASSWORD VALIDATION
//=====================================================

const confirmPasswordField =
    document.getElementById("adminConfirmPassword");

if (confirmPasswordField) {

    confirmPasswordField.addEventListener("keyup", () => {

        const password =
            document.getElementById("adminPassword").value;

        const confirmPassword =
            confirmPasswordField.value;

        if (confirmPassword.length === 0) {

            confirmPasswordField.style.borderColor = "var(--border-soft)";

            return;

        }

        if (password === confirmPassword) {

            confirmPasswordField.style.borderColor = "green";

        }

        else {

            confirmPasswordField.style.borderColor = "red";

        }

    });

}

//=====================================================
// ADMIN NAME
// LETTERS & SPACES ONLY
//=====================================================

const adminNameField =
    document.getElementById("adminName");

if (adminNameField) {

    adminNameField.addEventListener("input", () => {

        adminNameField.value =
            adminNameField.value.replace(
                /[^a-zA-Z\s]/g,
                ""
            );

    });

}

//=====================================================
// AUTO CAPITALIZE NAME
//=====================================================

if (adminNameField) {

    adminNameField.addEventListener("blur", () => {

        adminNameField.value =
            adminNameField.value
                .toLowerCase()
                .replace(/\b\w/g,
                    letter => letter.toUpperCase());

    });

}

//=====================================================
// REMOVE SPACES FROM ADMIN ID
//=====================================================

const adminIdField =
    document.getElementById("adminId");

if (adminIdField) {

    adminIdField.addEventListener("input", () => {

        adminIdField.value =
            adminIdField.value.replace(/\s/g, "");

    });

}

//=====================================================
// EMAIL LOWERCASE
//=====================================================

const emailField =
    document.getElementById("adminEmail");

if (emailField) {

    emailField.addEventListener("blur", () => {

        emailField.value =
            emailField.value.toLowerCase();

    });

}

//=====================================================
// RESET FORM
//=====================================================

function clearAdminForm() {

    document
        .getElementById("adminRegisterForm")
        .reset();

    if (passwordField)
        passwordField.style.borderColor = "var(--border-soft)";

    if (confirmPasswordField)
        confirmPasswordField.style.borderColor = "var(--border-soft)";

}

//=====================================================
// ENTER KEY SUPPORT
//=====================================================

document.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const form =
            document.getElementById("adminRegisterForm");

        if (form) {

            event.preventDefault();

            form.requestSubmit();

        }

    }

});

//=====================================================
// PAGE LOAD
//=====================================================

window.addEventListener("load", () => {

    if (adminNameField) {

        adminNameField.focus();

    }

});

//=====================================================
// LOGOUT HELPER
//=====================================================

function logoutAdmin() {

    localStorage.removeItem("loggedInAdmin");

    window.location.href = "login.html";

}

//=====================================================
// CHECK EXISTING SESSION
//=====================================================

(function () {

    const admin =
        localStorage.getItem("loggedInAdmin");

    if (admin) {

        console.log("Administrator session available.");

    }

})();

//=====================================================
// FUTURE BACKEND FLOW
//=====================================================

/*

Administrator Registration

        ↓

Client Validation

        ↓

Duplicate Email Check

        ↓

Duplicate Administrator ID Check

        ↓

Save to LocalStorage

        ↓

Future API

POST /api/admin/register

        ↓

Database

        ↓

Password Encryption

        ↓

JWT Authentication

        ↓

Admin Dashboard

*/