import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";

export default function NotFound() {
    return (
        <>
            <PageCss href="/css/theme.css" />
            <main
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "24px",
                    background: "var(--surface-alt)"
                }}
            >
                <h1 style={{ fontSize: "96px", margin: 0, color: "var(--primary)" }}>
                    404
                </h1>
                <h2 style={{ margin: "8px 0", color: "var(--primary-deep)" }}>
                    Page not found
                </h2>
                <p style={{ maxWidth: "420px", color: "var(--text-muted)" }}>
                    The page you are looking for doesn&apos;t exist or may have been moved.
                </p>
                <Link to="/" className="btn btn--primary" style={{ marginTop: "16px" }}>
                    Back to Home
                </Link>
            </main>
        </>
    );
}