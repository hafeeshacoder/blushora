import { Navigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import Chat from "../components/Chat";
import Notifications from "../components/Notifications";

export default function Messages() {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role") === "admin" ? "admin" : "student";

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <PageCss href="/css/my_courses.css" />
            <PageShell
                variant={role}
                active="messages"
                footer="standard"
                crumbs={[
                    { label: "Dashboard", to: role === "admin" ? "/admin-dashboard" : "/dashboard" },
                    { label: "Messages" }
                ]}
            >
                <div className="page">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Messages &amp; Notifications</h1>
                            <p className="page-head__sub">
                                Chat in real time and see new notifications as they arrive.
                            </p>
                        </div>
                    </header>
                    <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                        <Chat />
                        <Notifications />
                    </div>
                </div>
            </PageShell>
        </>
    );
}
