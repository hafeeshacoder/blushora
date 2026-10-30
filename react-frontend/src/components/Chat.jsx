import { useEffect, useRef, useState } from "react";
import apiClient from "../api/apiClient";
import { createSocket } from "../api/socketClient";

function Chat() {
    const [socket, setSocket] = useState(null);
    const [connected, setConnected] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [recipientId, setRecipientId] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");
    const recipientRef = useRef("");
    const endRef = useRef(null);

    const myId = (() => {
        try {
            const user = JSON.parse(
                localStorage.getItem("loggedInStudent") ||
                localStorage.getItem("loggedInAdmin")
            );
            return user && user.id ? String(user.id) : "";
        } catch {
            return "";
        }
    })();

    const nameOf = (id) => {
        if (id === myId) return "You";
        const contact = contacts.find((c) => c._id === id);
        return contact ? contact.name : "User";
    };

    // Load the list of people the user can chat with
    useEffect(() => {
        apiClient
            .get("/messages/contacts")
            .then((response) => setContacts(response.data.contacts))
            .catch(() => setError("Unable to load contacts"));
    }, []);

    // Real-time connection (authenticated with the JWT)
    useEffect(() => {
        const client = createSocket();

        client.on("connect", () => {
            setConnected(true);
            setError("");
        });
        client.on("disconnect", () => setConnected(false));
        client.on("connect_error", (err) => setError(err.message));
        client.on("receive_message", (data) => {
            // Only show messages that belong to the open conversation
            const other = recipientRef.current;
            if (data.sender === other || data.recipient === other) {
                setMessages((previous) =>
                    previous.some((m) => m._id === data._id) ? previous : [...previous, data]
                );
            }
        });

        client.connect();
        setSocket(client);

        return () => {
            client.disconnect();
        };
    }, []);

    // Switching recipient resets the thread and loads its history
    useEffect(() => {
        recipientRef.current = recipientId;
        setMessages([]);

        if (!recipientId) return;

        let active = true;
        apiClient
            .get(`/messages/${recipientId}`)
            .then((response) => {
                if (active) setMessages(response.data.messages);
            })
            .catch(() => setError("Unable to load message history"));

        return () => {
            active = false;
        };
    }, [recipientId]);

    useEffect(() => {
        if (endRef.current && endRef.current.scrollIntoView) {
            endRef.current.scrollIntoView({ block: "end" });
        }
    }, [messages]);

    function sendMessage(event) {
        event.preventDefault();
        if (!socket || !connected || !recipientId) return;

        socket.emit("send_message", { recipientId, text: message }, (result) => {
            if (result && result.success) {
                setMessage("");
                setError("");
            } else {
                setError((result && result.message) || "Message could not be sent");
            }
        });
    }

    return (
        <section className="chat" aria-labelledby="chat-title" style={styles.card}>
            <h2 id="chat-title" style={styles.h2}>Chat</h2>
            <p style={styles.status}>
                <span
                    aria-hidden="true"
                    style={{ ...styles.dot, background: connected ? "#2e9d5a" : "#b8b8b8" }}
                />
                Connection: {connected ? "Online" : "Offline"}
            </p>

            {error && <p role="alert" style={styles.error}>{error}</p>}

            <label htmlFor="chat-recipient" style={styles.label}>Send to</label>
            <select
                id="chat-recipient"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                style={styles.input}
            >
                <option value="">Select a person…</option>
                {contacts.map((contact) => (
                    <option key={contact._id} value={contact._id}>
                        {contact.name} ({contact.role})
                    </option>
                ))}
            </select>

            <div style={styles.thread} aria-live="polite" aria-label="Messages">
                {!recipientId && <p style={styles.muted}>Choose someone to start chatting.</p>}
                {recipientId && messages.length === 0 && (
                    <p style={styles.muted}>No messages yet. Say hello!</p>
                )}
                {messages.map((item) => (
                    <p
                        key={item._id}
                        style={{
                            ...styles.bubble,
                            alignSelf: item.sender === myId ? "flex-end" : "flex-start",
                            background: item.sender === myId ? "var(--primary, #2f6f4e)" : "var(--surface-3, #eef1ef)",
                            color: item.sender === myId ? "#fff" : "inherit"
                        }}
                    >
                        <strong>{nameOf(item.sender)}:</strong> {item.text}
                    </p>
                ))}
                <div ref={endRef} />
            </div>

            <form onSubmit={sendMessage} style={styles.form}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    aria-label="Message"
                    maxLength={2000}
                    required
                    style={{ ...styles.input, flex: 1, marginBottom: 0 }}
                />
                <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={!connected || !recipientId}
                >
                    Send
                </button>
            </form>
        </section>
    );
}

const styles = {
    card: { background: "var(--surface, #fff)", border: "1px solid var(--border-soft, #e2e6e3)", borderRadius: 12, padding: 20 },
    h2: { margin: "0 0 8px" },
    status: { display: "flex", alignItems: "center", gap: 8, margin: "0 0 12px", color: "var(--text-muted, #667)" },
    dot: { width: 10, height: 10, borderRadius: "50%", display: "inline-block" },
    error: { color: "var(--danger-text, #b3261e)", margin: "0 0 12px" },
    label: { display: "block", fontWeight: 600, marginBottom: 6 },
    input: { width: "100%", padding: "10px 12px", border: "1px solid var(--border-soft, #cfd6d1)", borderRadius: 8, marginBottom: 12, font: "inherit" },
    thread: { display: "flex", flexDirection: "column", gap: 8, minHeight: 200, maxHeight: 340, overflowY: "auto", padding: 12, border: "1px solid var(--border-soft, #e2e6e3)", borderRadius: 8, marginBottom: 12 },
    muted: { color: "var(--text-muted, #778)", margin: 0 },
    bubble: { margin: 0, padding: "8px 12px", borderRadius: 12, maxWidth: "80%", wordBreak: "break-word" },
    form: { display: "flex", gap: 8 }
};

export default Chat;
