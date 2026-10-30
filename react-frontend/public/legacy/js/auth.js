// auth.js

import {
    getData,
    saveData,
    removeData
} from "./api.js";


// ==========================================
// LOGIN
// ==========================================

export function loginUser(role, email, password) {

    if (role === "student") {

        const students =
            getData("students", []);

        const student =
            students.find(user =>
                user.email === email &&
                user.password === password
            );

        if (student) {

            saveData(
                "loggedInStudent",
                student
            );

            return {
                success: true,
                message: "Student Login Successful.",
                user: student
            };
        }

        return {
            success: false,
            message: "Invalid Student Email or Password."
        };
    }


    if (role === "admin") {

        const admins =
            getData("admins", []);

        const admin =
            admins.find(user =>
                user.email === email &&
                user.password === password
            );

        if (admin) {

            saveData(
                "loggedInAdmin",
                admin
            );

            return {
                success: true,
                message: "Administrator Login Successful.",
                user: admin
            };
        }

        return {
            success: false,
            message: "Invalid Administrator Email or Password."
        };
    }


    return {
        success: false,
        message: "Invalid role."
    };
}


// ==========================================
// LOGOUT
// ==========================================

export function logoutUser(role) {

    if (role === "student") {

        removeData("loggedInStudent");

    }

    if (role === "admin") {

        removeData("loggedInAdmin");

    }

}