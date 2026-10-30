//=====================================================
// FORGOT PASSWORD
// forgot_password.js
//=====================================================

document.addEventListener("DOMContentLoaded", () => {

    initializeForgotPassword();

});

//=====================================================
// INITIALIZE PAGE
//=====================================================

function initializeForgotPassword() {

    const form =
        document.getElementById("forgotPasswordForm");

    if (!form) {

        console.error("Forgot Password Form Not Found.");

        return;

    }

    form.addEventListener(
        "submit",
        forgotPassword
    );

}

//=====================================================
// FORGOT PASSWORD
//=====================================================

function forgotPassword(event) {

    event.preventDefault();

    const email =
        document.getElementById("email")
        .value
        .trim()
        .toLowerCase();

    //----------------------------------------
    // VALIDATION
    //----------------------------------------

    if (email === "") {

        alert("Please enter your registered Email.");

        document.getElementById("email").focus();

        return;

    }

    if (!validateEmail(email)) {

        alert("Please enter a valid Email Address.");

        document.getElementById("email").focus();

        return;

    }

    //----------------------------------------
    // GET USERS
    //----------------------------------------

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const admins =
        JSON.parse(localStorage.getItem("admins")) || [];

    //----------------------------------------
    // CHECK STUDENT
    //----------------------------------------

    const student =
        students.find(user =>
            user.email.toLowerCase() === email
        );

    //----------------------------------------
    // CHECK ADMIN
    //----------------------------------------

    const admin =
        admins.find(user =>
            user.email.toLowerCase() === email
        );

    //----------------------------------------
    // EMAIL NOT FOUND
    //----------------------------------------

    if (!student && !admin) {

        alert("Email is not registered.");

        return;

    }

    //----------------------------------------
    // SAVE RESET USER
    //----------------------------------------

    if (student) {

        sessionStorage.setItem(
            "resetUserRole",
            "student"
        );

        sessionStorage.setItem(
            "resetUserEmail",
            email
        );

    }

    if (admin) {

        sessionStorage.setItem(
            "resetUserRole",
            "admin"
        );

        sessionStorage.setItem(
            "resetUserEmail",
            email
        );

    }

    //----------------------------------------
    // SUCCESS
    //----------------------------------------

    alert("Email Verified Successfully.");

    window.location.href =
        "reset_password.html";

}

//=====================================================
// EMAIL VALIDATION
//=====================================================

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

//=====================================================
// EMAIL LOWERCASE
//=====================================================

const emailField =
    document.getElementById("email");

if (emailField) {

    emailField.addEventListener("blur", () => {

        emailField.value =
            emailField.value.toLowerCase();

    });

}

//=====================================================
// ENTER KEY SUPPORT
//=====================================================

document.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const form =
            document.getElementById("forgotPasswordForm");

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

    if (emailField) {

        emailField.focus();

    }

});

//=====================================================
// FUTURE BACKEND FLOW
//=====================================================

/*

User enters Email

        ↓

Client Validation

        ↓

Check LocalStorage

        ↓

Future API

POST /forgot-password

        ↓

Generate OTP

        ↓

Send Email

        ↓

Verify OTP

        ↓

Reset Password

*/