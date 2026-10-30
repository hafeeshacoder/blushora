import { useState } from "react";
import { Navigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1";

export default function ChangePassword() {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role") === "admin" ? "admin" : "student";

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setMessage({ type: "", text: "" });

        if (newPassword.length < 12) {
            setMessage({ type: "error", text: "New password must contain at least 12 characters." });
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage({ type: "error", text: "New passwords do not match." });
            return;
        }

        if (newPassword === currentPassword) {
            setMessage({ type: "error", text: "New password must be different from the current password." });
            return;
        }

        setSaving(true);

        try {
            const response = await fetch(API_URL + "/auth/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
                body: JSON.stringify({ currentPassword, newPassword })
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                const details = Array.isArray(data.errors) && data.errors.length
                    ? data.errors.map((item) => item.message || item).join(" ")
                    : data.message || "Could not change the password.";
                setMessage({ type: "error", text: details });
                return;
            }

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setMessage({ type: "success", text: data.message || "Password changed successfully." });
        } catch (error) {
            setMessage({ type: "error", text: "Unable to reach the server. Please make sure the backend is running." });
        } finally {
            setSaving(false);
        }
    }

    return (
        <>
            <PageCss href="/css/my_courses.css" />
            <PageShell
                variant={role}
                active="password"
                footer="standard"
                crumbs={[
                    { label: "Dashboard", to: role === "admin" ? "/admin-dashboard" : "/dashboard" },
                    { label: "Change Password" }
                ]}
            >
                <div className="page">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Change Password</h1>
                            <p className="page-head__sub">
                                If your administrator gave you a temporary password, change it here to a password only you know.
                            </p>
                        </div>
                    </header>

                    <section className="panel" style={{ maxWidth: 520 }}>
                        <div className="panel__body">
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label htmlFor="currentPassword">Current Password</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="newPassword">New Password</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        autoComplete="new-password"
                                        required
                                    />
                                    <small>At least 12 characters.</small>
                                </div>
                                <div className="field">
                                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirmNewPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        autoComplete="new-password"
                                        required
                                    />
                                </div>

                                {message.text && (
                                    <p role="status" style={{ color: message.type === "error" ? "#b00020" : "#1b7f3b", margin: "12px 0" }}>
                                        {message.text}
                                    </p>
                                )}

                                <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={saving}>
                                    {saving ? "Saving..." : "Change Password"}
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </PageShell>
        </>
    );
}
