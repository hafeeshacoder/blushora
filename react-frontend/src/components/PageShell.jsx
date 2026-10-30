import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import { NAV, ROLE_HOME, FOOTERS } from "./navConfig";

function LogoMark() {
    return (
        <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
                <rect className="mark__bg" width="32" height="32" rx="8" />
                <path className="mark__stem" d="M16 26V16.5" fill="none" strokeWidth="2" strokeLinecap="round" />
                <path className="mark__leaf" d="M16 16.5c0-4.9 3.5-8.5 9.5-8.5 0 5.5-3.5 8.5-9.5 8.5z" />
                <path className="mark__leaf mark__leaf--soft" d="M16 20c0-3.8-2.7-6.5-7.8-6.5 0 4.2 2.7 6.5 7.8 6.5z" />
            </svg>
        </span>
    );
}

function readUser() {
    try {
        const student = JSON.parse(localStorage.getItem("loggedInStudent"));
        if (student) return { name: student.studentName || student.name || student.email, role: "Student" };
    } catch (e) {}
    try {
        const admin = JSON.parse(localStorage.getItem("loggedInAdmin"));
        if (admin) return { name: admin.adminName || admin.name || admin.email, role: "Administrator" };
    } catch (e) {}
    return null;
}

function initials(name) {
    if (!name) return "";
    return String(name).trim().split(/\s+/).slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join("");
}

function Crumbs({ crumbs }) {
    if (!crumbs || crumbs.length === 0) return null;
    return (
        <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
                {crumbs.map((c, i) =>
                    c.to ? (
                        <li key={i}>
                            <Link to={c.to} reloadDocument>{c.label}</Link>
                        </li>
                    ) : (
                        <li key={i} aria-current="page">{c.label}</li>
                    )
                )}
            </ol>
        </nav>
    );
}

function Sidebar({ variant, active, onClose, collapsed, onToggleCollapse }) {
    const groups = NAV[variant] || [];
    return (
        <aside className="sidebar" id="sidebar" aria-label="Sidebar">
            <div className="sidebar__head">
                <Link className="logo logo--light" to={ROLE_HOME[variant]} reloadDocument aria-label="Blushora home">
                    <LogoMark />
                    <span className="logo__word">Blushora</span>
                    {variant === "admin" && <span className="logo__tag">Admin</span>}
                </Link>
                <button className="icon-btn sidebar__close" type="button" onClick={onClose} aria-label="Close menu">
                    <Icon name="close" />
                </button>
            </div>
            <nav className="sidebar__nav" aria-label="Main navigation">
                {groups.map((g) => (
                    <div key={g.group}>
                        <p className="nav-group">{g.group}</p>
                        {g.items.map((item) => (
                            <NavLink
                                key={item.key}
                                to={item.route}
                                reloadDocument
                                title={item.label}
                                className={"nav-link" + (item.key === active ? " is-active" : "")}
                                aria-current={item.key === active ? "page" : undefined}
                            >
                                <Icon name={item.icon} />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>
            <div className="sidebar__foot">
                <button
                    className="icon-btn collapse-toggle"
                    type="button"
                    onClick={onToggleCollapse}
                    aria-expanded={!collapsed}
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <Icon name="menu" />
                    <span>{collapsed ? "Expand" : "Collapse"}</span>
                </button>
                <button id="logoutBtn" className="logout-btn" type="button">
                    <Icon name="logout" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}

function UserChip() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(readUser());
    }, []);
    if (!user) return null;
    return (
        <div className="user-chip" data-user-chip data-role={user.role}>
            <span className="avatar" aria-hidden="true">{initials(user.name)}</span>
            <span className="user-chip__text">
                <span className="user-chip__name">{user.name}</span>
                <span className="user-chip__role">{user.role}</span>
            </span>
        </div>
    );
}

const COLLAPSE_KEY = "eduBloomSidebarCollapsed";

export default function PageShell({ children, variant = "student", active, footer = "standard", crumbs = [] }) {
    const [navOpen, setNavOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("nav-open", navOpen);
        return () => document.body.classList.remove("nav-open");
    }, [navOpen]);

    useEffect(() => {
        try {
            setCollapsed(localStorage.getItem(COLLAPSE_KEY) === "1");
        } catch (e) {}
        document.documentElement.classList.remove("sidebar-collapsed-init");
    }, []);

    function toggleCollapse() {
        setCollapsed((prev) => {
            const next = !prev;
            try {
                localStorage.setItem(COLLAPSE_KEY, next ? "1" : "0");
            } catch (e) {}
            return next;
        });
    }

    if (variant === "home") {
        return (
            <>
                <a className="skip-link" href="#main">Skip to main content</a>
                <header className="site-header">
                    <div className="site-header__inner">
                        <Link className="logo" to="/" reloadDocument aria-label="Blushora home">
                            <LogoMark />
                            <span className="logo__word">Blushora</span>
                        </Link>
                        <nav className="site-nav" aria-label="Main navigation">
                            <Link className="site-nav__link is-active" to="/" reloadDocument aria-current="page">Home</Link>
                            <Link className="btn btn--primary btn--sm" to="/login" reloadDocument>Login</Link>
                            <button id="logoutBtn" className="logout-btn" type="button" style={{ display: "none" }}>Logout</button>
                        </nav>
                    </div>
                </header>
                <main className="home" id="main">
                    {children}
                </main>
                <footer className="site-footer"><p>{FOOTERS.standard}</p></footer>
            </>
        );
    }

    return (
        <>
            <a className="skip-link" href="#main">Skip to main content</a>
            <div className={"app-shell" + (collapsed ? " is-collapsed" : "")} id="appShell">
                <Sidebar variant={variant} active={active} onClose={() => setNavOpen(false)} collapsed={collapsed} onToggleCollapse={toggleCollapse} />
                <div className="sidebar-scrim" onClick={() => setNavOpen(false)} />

                <div className="app-main">
                    <header className="topbar">
                        <button
                            className="icon-btn nav-toggle"
                            type="button"
                            aria-controls="sidebar"
                            aria-expanded={navOpen}
                            aria-label="Open menu"
                            onClick={() => setNavOpen((v) => !v)}
                        >
                            <Icon name="menu" />
                        </button>
                        <Crumbs crumbs={crumbs} />
                        <UserChip />
                    </header>

                    <main className="main-content" id="main">
                        {children}
                        <footer className="site-footer"><p>{FOOTERS[footer]}</p></footer>
                    </main>
                </div>
            </div>
        </>
    );
}
