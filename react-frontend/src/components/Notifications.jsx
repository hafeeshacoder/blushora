import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import { createSocket } from "../api/socketClient";

function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        let active = true;

        apiClient
            .get("/notifications")
            .then((response) => {
                if (active) setNotifications(response.data.notifications);
            })
            .catch(() => setError("Unable to load notifications"));

        const socket = createSocket();

        socket.on("new_notification", (notification) => {
            setNotifications((previous) => [notification, ...previous]);
        });

        socket.connect();

        return () => {
            active = false;
            socket.disconnect();
        };
    }, []);

    async function markRead(id) {
        try {
            await apiClient.patch(`/notifications/${id}/read`);
            setNotifications((previous) =>
                previous.map((item) => (item._id === id ? { ...item, isRead: true } : item))
            );
        } catch {
            setError("Unable to update notification");
        }
    }

    const unread = notifications.filter((n) => !n.isRead).length;

    return (
        <section aria-labelledby="notif-title" style={styles.card}>
            <h2 id="notif-title" style={styles.h2}>
                Notifications {unread > 0 && <span style={styles.badge}>{unread} new</span>}
            </h2>
            {error && <p role="alert" style={{ color: "var(--danger-text, #b3261e)" }}>{error}</p>}
            {notifications.length === 0 && <p style={{ color: "var(--text-muted, #778)" }}>No notifications yet.</p>}
            <ul style={styles.list} aria-live="polite">
                {notifications.map((item) => (
                    <li key={item._id} style={{ ...styles.item, fontWeight: item.isRead ? 400 : 600 }}>
                        <span>
                            {item.message}
                            <small style={styles.time}>
                                {item.createdAt ? new Date(item.createdAt).toLocaleString() : ""}
                            </small>
                        </span>
                        {!item.isRead && (
                            <button type="button" className="btn btn--sm" onClick={() => markRead(item._id)}>
                                Mark as read
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

const styles = {
    card: { background: "var(--surface, #fff)", border: "1px solid var(--border-soft, #e2e6e3)", borderRadius: 12, padding: 20 },
    h2: { margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10 },
    badge: { fontSize: 12, background: "#2f6f4e", color: "#fff", padding: "2px 8px", borderRadius: 999 },
    list: { listStyle: "none", margin: 0, padding: 0, maxHeight: 440, overflowY: "auto" },
    item: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border-soft, #e8ece9)" },
    time: { display: "block", fontWeight: 400, color: "var(--text-muted, #778)" }
};

export default Notifications;
