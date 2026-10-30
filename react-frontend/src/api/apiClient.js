import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1"
});

apiClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// An expired or invalid token ends the session and returns to the login page.
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const url = error.config && error.config.url ? error.config.url : "";

        if (
            error.response &&
            error.response.status === 401 &&
            !url.includes("/auth/login") &&
            sessionStorage.getItem("token")
        ) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("role");
            localStorage.removeItem("loggedInStudent");
            localStorage.removeItem("loggedInAdmin");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default apiClient;
