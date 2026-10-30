import {
    createContext,
    useContext,
    useState
} from "react";


const AuthContext =
    createContext(null);


export function AuthProvider({
    children
}) {

    const [
        loggedInStudent,
        setLoggedInStudent
    ] = useState(() => {

        const data =
            localStorage.getItem(
                "loggedInStudent"
            );

        if (!data) {
            return null;
        }

        try {

            return JSON.parse(data);

        } catch {

            return data;

        }

    });


    const [
        loggedInAdmin,
        setLoggedInAdmin
    ] = useState(() => {

        const data =
            localStorage.getItem(
                "loggedInAdmin"
            );

        if (!data) {
            return null;
        }

        try {

            return JSON.parse(data);

        } catch {

            return data;

        }

    });


    function loginStudent(student) {

        setLoggedInStudent(student);

        localStorage.setItem(
            "loggedInStudent",
            JSON.stringify(student)
        );

    }


    function loginAdmin(admin) {

        setLoggedInAdmin(admin);

        localStorage.setItem(
            "loggedInAdmin",
            JSON.stringify(admin)
        );

    }


    function logoutStudent() {

        setLoggedInStudent(null);

        localStorage.removeItem(
            "loggedInStudent"
        );

    }


    function logoutAdmin() {

        setLoggedInAdmin(null);

        localStorage.removeItem(
            "loggedInAdmin"
        );

    }


    function logout(role) {

        if (role === "admin") {

            logoutAdmin();

        } else {

            logoutStudent();

        }

    }


    return (

        <AuthContext.Provider
            value={{
                loggedInStudent,
                loggedInAdmin,
                loginStudent,
                loginAdmin,
                logoutStudent,
                logoutAdmin,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}


export function useAuth() {

    return useContext(
        AuthContext
    );

}