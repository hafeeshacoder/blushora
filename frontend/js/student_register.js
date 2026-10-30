//=====================================================
// STUDENT REGISTRATION
// student_register.js
//=====================================================

document.addEventListener("DOMContentLoaded", () => {

    initializeRegistration();

});

//=====================================================
// INITIALIZE PAGE
//=====================================================

function initializeRegistration() {

    const form = document.getElementById("registerForm");

    if (!form) {
        console.error("Registration form not found.");
        return;
    }

    form.addEventListener("submit", registerStudent);

}

//=====================================================
// REGISTER STUDENT
//=====================================================

function registerStudent(event) {

    event.preventDefault();

    //--------------------------------------------
    // GET VALUES
    //--------------------------------------------

    const studentName =
        document.getElementById("studentName").value.trim();

    const studentId =
        document.getElementById("studentId").value.trim();

    const studentEmail =
        document.getElementById("studentEmail").value.trim();

    const department =
        document.getElementById("department").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    //--------------------------------------------
    // VALIDATION
    //--------------------------------------------

    if (studentName === "") {

        alert("Please enter Student Name.");

        document.getElementById("studentName").focus();

        return;

    }

    if (studentName.length < 3) {

        alert("Student Name should contain at least 3 characters.");

        document.getElementById("studentName").focus();

        return;

    }

    if (studentId === "") {

        alert("Please enter Student ID.");

        document.getElementById("studentId").focus();

        return;

    }

    if (studentId.length < 4) {

        alert("Student ID is too short.");

        document.getElementById("studentId").focus();

        return;

    }

    if (studentEmail === "") {

        alert("Please enter Email Address.");

        document.getElementById("studentEmail").focus();

        return;

    }

    if (!validateEmail(studentEmail)) {

        alert("Please enter a valid Email Address.");

        document.getElementById("studentEmail").focus();

        return;

    }

    if (department === "") {

        alert("Please select Department.");

        document.getElementById("department").focus();

        return;

    }

    if (password === "") {

        alert("Please enter Password.");

        document.getElementById("password").focus();

        return;

    }

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        document.getElementById("password").focus();

        return;

    }

    if (confirmPassword === "") {

        alert("Please confirm your Password.");

        document.getElementById("confirmPassword").focus();

        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        document.getElementById("confirmPassword").focus();

        return;

    }

    //--------------------------------------------
    // LOCAL STORAGE
    //--------------------------------------------

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    //--------------------------------------------
    // CHECK EMAIL
    //--------------------------------------------

    const emailExists = students.some(student =>
        student.email.toLowerCase() ===
        studentEmail.toLowerCase()
    );

    if (emailExists) {

        alert("Email already registered.");

        document.getElementById("studentEmail").focus();

        return;

    }

    //--------------------------------------------
    // CHECK STUDENT ID
    //--------------------------------------------

    const idExists = students.some(student =>
        student.studentId === studentId
    );

    if (idExists) {

        alert("Student ID already exists.");

        document.getElementById("studentId").focus();

        return;

    }

    //--------------------------------------------
    // CREATE STUDENT OBJECT
    //--------------------------------------------

    const newStudent = {

        studentName: studentName,

        studentId: studentId,

        email: studentEmail,

        department: department,

        password: password,

        role: "Student",

        enrolledCourses: [],

        completedCourses: [],

        certificates: [],

        progress: {},

        registrationDate: new Date().toLocaleDateString(),

        lastLogin: "",

        active: true

    };

    //--------------------------------------------
    // SAVE STUDENT
    //--------------------------------------------

    students.push(newStudent);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    //--------------------------------------------
    // Registration does not start a session.
    // The student must log in with their new
    // credentials on the Login page.
    //--------------------------------------------

    //--------------------------------------------
    // SUCCESS MESSAGE
    //--------------------------------------------

    alert("Student Registration Successful!");

    //--------------------------------------------
    // RESET FORM
    //--------------------------------------------

    document.getElementById("registerForm").reset();

    //--------------------------------------------
    // REDIRECT
    //--------------------------------------------

    window.location.href = "login.html";

}//=====================================================
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
    document.getElementById("password");

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
// CONFIRM PASSWORD CHECK
//=====================================================

const confirmPasswordField =
    document.getElementById("confirmPassword");

if (confirmPasswordField) {

    confirmPasswordField.addEventListener("keyup", () => {

        const password =
            document.getElementById("password").value;

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
// STUDENT NAME
// ONLY LETTERS & SPACES
//=====================================================

const studentNameField =
    document.getElementById("studentName");

if (studentNameField) {

    studentNameField.addEventListener("input", () => {

        studentNameField.value =
            studentNameField.value.replace(
                /[^a-zA-Z\s]/g,
                ""
            );

    });

}

//=====================================================
// AUTO CAPITALIZE NAME
//=====================================================

if (studentNameField) {

    studentNameField.addEventListener("blur", () => {

        studentNameField.value =
            studentNameField.value
            .toLowerCase()
            .replace(/\b\w/g, letter => letter.toUpperCase());

    });

}

//=====================================================
// STUDENT ID
// NO SPACES
//=====================================================

const studentIdField =
    document.getElementById("studentId");

if (studentIdField) {

    studentIdField.addEventListener("input", () => {

        studentIdField.value =
            studentIdField.value.replace(/\s/g, "");

    });

}

//=====================================================
// EMAIL TO LOWERCASE
//=====================================================

const emailField =
    document.getElementById("studentEmail");

if (emailField) {

    emailField.addEventListener("blur", () => {

        emailField.value =
            emailField.value.toLowerCase();

    });

}

//=====================================================
// RESET FORM
//=====================================================

function clearRegistrationForm() {

    document.getElementById("registerForm").reset();

    passwordField.style.borderColor = "var(--border-soft)";

    confirmPasswordField.style.borderColor = "var(--border-soft)";

}

//=====================================================
// ENTER KEY SUPPORT
//=====================================================

document.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const form =
            document.getElementById("registerForm");

        if (form) {

            event.preventDefault();

            form.requestSubmit();

        }

    }

});

//=====================================================
// PAGE INITIALIZATION
//=====================================================

window.addEventListener("load", () => {

    if (studentNameField) {

        studentNameField.focus();

    }

});

//=====================================================
// OPTIONAL LOGOUT HELPER
//=====================================================

function logoutStudent() {

    localStorage.removeItem("loggedInStudent");

    window.location.href = "login.html";

}

//=====================================================
// FUTURE BACKEND FLOW
//=====================================================

/*

Student Registration

↓

Client Validation

↓

Duplicate Email Check

↓

Duplicate Student ID Check

↓

Save to LocalStorage

↓

Future:
POST /api/students/register

↓

Database

↓

Email Verification

↓

Login

*/