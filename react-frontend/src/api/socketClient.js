import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:3001";

// Use the backend origin here, without /api/v1.
export function createSocket() {
    return io(SOCKET_URL, {
        autoConnect: false,
        auth: { token: sessionStorage.getItem("token") }
    });
}
