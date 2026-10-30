import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function AdminRegister() {
    return (
        <>
            <PageCss href="/css/admin_register.css" />
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
                    <div className="auth__card auth__card--wide">
                        <Link to="/" className="back-link">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <path d="m12 19-7-7 7-7"></path>
                                <path d="M19 12H5"></path>
                            </svg>
                            <span>Back to Home</span>
                        </Link>
                        <p className="auth__crumb">Login Portal</p>
                        <h1 className="auth__title">Administrator Registration</h1>
                        <form id="adminRegisterForm">
                            <div className="field-grid">
                                <div className="field">
                                    <label htmlFor="adminName">Administrator Name</label>
                                    <input type="text" placeholder="Enter Full Name" id="adminName" required autoComplete="name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="adminId">Administrator ID</label>
                                    <input type="text" placeholder="Enter Administrator ID" id="adminId" required />
                                </div>
                                <div className="field">
                                    <label htmlFor="adminEmail">Email Address</label>
                                    <input type="email" placeholder="Enter Email" id="adminEmail" required autoComplete="email" />
                                </div>
                                <div className="field">
                                    <label htmlFor="designation">Designation</label>
                                    <select id="designation" required>
                                        <option value="">Select Designation</option>
                                        <option>Principal</option>
                                        <option>Head of Department (HOD)</option>
                                        <option>Faculty</option>
                                        <option>Course Coordinator</option>
                                        <option>System Administrator</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="adminInviteCode">Administrator Invite Code</label>
                                    <input type="password" placeholder="Enter invite code" id="adminInviteCode" required autoComplete="off" />
                                </div>
                                <div className="field">
                                    <label htmlFor="adminPassword">Password</label>
                                    <input type="password" placeholder="Create Password" id="adminPassword" required autoComplete="new-password" />
                                </div>
                                <div className="field">
                                    <label htmlFor="adminConfirmPassword">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password" id="adminConfirmPassword" required autoComplete="new-password" />
                                </div>
                            </div>
                            <button type="submit" id="adminBtn" className="btn btn--primary btn--lg btn--block">Register</button>
                        </form>
                        <p className="auth__alt">
                            Already have an account?{" "}
                            <Link to="/login" className="text-link">Login Here</Link>
                        </p>
                    </div>
                </main>
            </div>

            <LegacyScript src="/legacy/js/admin_register.js" />
        </>
    );
}
