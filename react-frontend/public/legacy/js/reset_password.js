//=====================================================
// RESET PASSWORD
// reset_password.js
//=====================================================

document.addEventListener("DOMContentLoaded", () => {

    initializeResetPassword();

});

//=====================================================
// INITIALIZE PAGE
//=====================================================

function initializeResetPassword() {

    const form =
        document.getElementById("resetPasswordForm");

    if (!form) {

        console.error("Reset Password Form Not Found.");

        return;

    }

    form.addEventListener(
        "submit",
        resetPassword
    );

}

//=====================================================
// RESET PASSWORD
//=====================================================

function resetPassword(event) {

    event.preventDefault();

    //------------------------------------------
    // GET VALUES
    //------------------------------------------

    const newPassword =
        document.getElementById("newPassword")
        .value;

    const confirmPassword =
        document.getElementById("confirmPassword")
        .value;

    //------------------------------------------
    // SESSION
    //------------------------------------------

    const role =
        sessionStorage.getItem("resetUserRole");

    const email =
        sessionStorage.getItem("resetUserEmail");

    //------------------------------------------
    // VALIDATION
    //------------------------------------------

    if (!role || !email) {

        alert("Reset session expired.");

        window.location.href = "forgot_password.html";

        return;

    }

    if (newPassword === "") {

        alert("Enter New Password.");

        document.getElementById("newPassword").focus();

        return;

    }

    if (newPassword.length < 6) {

        alert("Password must contain at least 6 characters.");

        document.getElementById("newPassword").focus();

        return;

    }

    if (confirmPassword === "") {

        alert("Confirm your Password.");

        document.getElementById("confirmPassword").focus();

        return;

    }

    if (newPassword !== confirmPassword) {

        alert("Passwords do not match.");

        document.getElementById("confirmPassword").focus();

        return;

    }

    //------------------------------------------
    // STUDENT
    //------------------------------------------

    if (role === "student") {

        let students =
            JSON.parse(localStorage.getItem("students")) || [];

        students = students.map(student => {

            if (student.email.toLowerCase() === email.toLowerCase()) {

                student.password = newPassword;

            }

            return student;

        });

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

    }

    //------------------------------------------
    // ADMIN
    //------------------------------------------

    if (role === "admin") {

        let admins =
            JSON.parse(localStorage.getItem("admins")) || [];

        admins = admins.map(admin => {

            if (admin.email.toLowerCase() === email.toLowerCase()) {

                admin.password = newPassword;

            }

            return admin;

        });

        localStorage.setItem(
            "admins",
            JSON.stringify(admins)
        );

    }

    //------------------------------------------
    // CLEAR SESSION
    //------------------------------------------

    sessionStorage.removeItem("resetUserRole");

    sessionStorage.removeItem("resetUserEmail");

    //------------------------------------------
    // SUCCESS
    //------------------------------------------

    alert("Password Reset Successful.");

    window.location.href = "login.html";

}

//=====================================================
// PASSWORD STRENGTH
//=====================================================

const newPasswordField =
    document.getElementById("newPassword");

if (newPasswordField) {

    newPasswordField.addEventListener("keyup", () => {

        const password =
            newPasswordField.value;

        if (password.length === 0) {

            newPasswordField.style.borderColor = "var(--border-soft)";

        }

        else if (password.length < 6) {

            newPasswordField.style.borderColor = "red";

        }

        else if (password.length < 8) {

            newPasswordField.style.borderColor = "orange";

        }

        else {

            newPasswordField.style.borderColor = "green";

        }

    });

}

//=====================================================
// CONFIRM PASSWORD
//=====================================================

const confirmPasswordField =
    document.getElementById("confirmPassword");

if (confirmPasswordField) {

    confirmPasswordField.addEventListener("keyup", () => {

        const password =
            document.getElementById("newPassword").value;

        const confirm =
            confirmPasswordField.value;

        if (confirm.length === 0) {

            confirmPasswordField.style.borderColor = "var(--border-soft)";

            return;

        }

        if (password === confirm) {

            confirmPasswordField.style.borderColor = "green";

        }

        else {

            confirmPasswordField.style.borderColor = "red";

        }

    });

}

//=====================================================
// CLEAR FORM
//=====================================================

function clearResetForm() {

    document
        .getElementById("resetPasswordForm")
        .reset();

    if (newPasswordField)
        newPasswordField.style.borderColor = "var(--border-soft)";

    if (confirmPasswordField)
        confirmPasswordField.style.borderColor = "var(--border-soft)";

}

//=====================================================
// ENTER KEY
//=====================================================

document.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const form =
            document.getElementById("resetPasswordForm");

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

    if (newPasswordField) {

        newPasswordField.focus();

    }

});

//=====================================================
// FUTURE BACKEND FLOW
//=====================================================

/*

Forgot Password

        ↓

Verify Email

        ↓

OTP Verification

        ↓

Enter New Password

        ↓

API

PUT /reset-password

        ↓

Database Update

        ↓

Password Encryption

        ↓

Login Page

*/