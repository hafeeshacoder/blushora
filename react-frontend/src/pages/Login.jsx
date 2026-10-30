import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function Login() {
    return (
        <>
            <PageCss href="/css/login.css" />
            <div className="auth">
                <aside className="auth__brand">
                    <Link to="/" className="logo logo--light" aria-label="Blushora home">
                        <span className="logo__mark" aria-hidden="true">
                            <svg viewBox="0 0 32 32" focusable="false">
                                <rect className="mark__bg" width="32" height="32" rx="8"></rect>
                                <path className="mark__stem" d="M16 26V16.5" fill="none" strokeWidth="2" strokeLinecap="round"></path>
                                <path className="mark__leaf" d="M16 16.5c0-4.9 3.5-8.5 9.5-8.5 0 5.5-3.5 8.5-9.5 8.5z"></path>
                                <path className="mark__leaf mark__leaf--soft" d="M16 20c0-3.8-2.7-6.5-7.8-6.5 0 4.2 2.7 6.5 7.8 6.5z"></path>
                            </svg>
                        </span>
                        <span className="logo__word">Blushora</span>
                    </Link>
                    <div className="auth__pitch">
                        <p className="auth__tagline">Learn, Grow, Achieve</p>
                        <ul className="auth__points">
                            <li>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span>Browse and enroll in available courses</span>
                            </li>
                            <li>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span>Track completed and pending modules</span>
                            </li>
                            <li>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span>Download a certificate when you finish</span>
                            </li>
                        </ul>
                    </div>
                    <svg className="auth__leaf" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
                        <path d="M100 196V104" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"></path>
                        <path d="M100 104C100 48 142 8 198 8 198 68 156 104 100 104Z" fill="currentColor"></path>
                        <path d="M100 140C100 96 66 62 10 62 10 110 44 140 100 140Z" fill="currentColor" fillOpacity=".6"></path>
                    </svg>
                </aside>
                <main className="auth__panel" id="main">
                    <div className="auth__card">
                        <Link to="/" className="back-link">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <path d="m12 19-7-7 7-7"></path>
                                <path d="M19 12H5"></path>
                            </svg>
                            <span>Back to Home</span>
                        </Link>
                        <h1 className="auth__title">Login Portal</h1>
                        <div className="segmented tabs" role="group" aria-label="Login as">
                            <button className="active" id="studentBtn" type="button">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                    <path d="M22 10v6"></path>
                                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                </svg>
                                <span>Student</span>
                            </button>
                            <button id="adminBtn" type="button">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span>Admin</span>
                            </button>
                        </div>
                        <p className="role-text" id="role">Student Login</p>
                        <form>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter Email" autoComplete="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter Password" autoComplete="current-password" />
                            </div>
                            <div className="field-row field-row--end">
                                <Link to="/forgot-password" className="text-link">Forgot Password?</Link>
                            </div>
                            <button type="button" className="btn btn--primary btn--lg btn--block login-btn">Login</button>
                        </form>
                        <div className="register">
                            <h3 id="registerTitle">New Student?</h3>
                            <p id="registerText">Don't have a student account?</p>
                            <a href="student_register.html" id="registerLink" className="btn btn--outline btn--block">Student Register</a>
                        </div>
                    </div>
                </main>
            </div>

            <LegacyScript src="/legacy/js/login.js" module={true} />
        </>
    );
}
