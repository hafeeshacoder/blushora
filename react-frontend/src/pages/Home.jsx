import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function Home() {
    return (
        <>
            <PageCss href="/css/index.css" />
            <PageShell variant="home">
                <section className="hero" aria-labelledby="hero-title">
                    <div className="hero__copy">
                        <h1 id="hero-title">Grow Your Skills with Blushora</h1>
                        <p className="hero__lead">A complete platform for students to register, enroll in courses, track learning progress and receive notifications. Administrators can efficiently manage students, courses and reports.</p>
                        <div className="hero__actions">
                            <Link to="/login" className="btn btn--primary btn--lg">Get Started</Link>
                        </div>
                    </div>
                    <div className="hero__visual" aria-hidden="true">
                        <div className="preview">
                            <div className="preview__head">
                                <span className="preview__title">My courses</span>
                                <span className="badge" data-tone="brand">3 enrolled</span>
                            </div>
                            <ul className="preview__list">
                                <li>
                                    <div className="preview__row">
                                        <span>Web Development</span>
                                        <span className="badge" data-tone="info">In Progress</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-fill" style={{width: "72%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="preview__row">
                                        <span>Python Programming</span>
                                        <span className="badge" data-tone="success">Completed</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-fill" style={{width: "100%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="preview__row">
                                        <span>Database Management</span>
                                        <span className="badge" data-tone="brand">Enrolled</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-fill" style={{width: "18%"}}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="preview__note">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                <circle cx="12" cy="8" r="6"></circle>
                            </svg>
                            <span>Certificate ready to download</span>
                        </div>
                    </div>
                </section>
                <section className="features" aria-labelledby="features-title">
                    <h2 id="features-title">Our Features</h2>
                    <ul className="feature-list">
                        <li className="feature">
                            <span className="feature__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <line x1="19" x2="19" y1="8" y2="14"></line>
                                    <line x1="22" x2="16" y1="11" y2="11"></line>
                                </svg>
                            </span>
                            <div>
                                <h3>Student Registration</h3>
                                <p>Create an account securely.</p>
                            </div>
                        </li>
                        <li className="feature">
                            <span className="feature__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                </svg>
                            </span>
                            <div>
                                <h3>Course Enrollment</h3>
                                <p>Browse and enroll in available courses.</p>
                            </div>
                        </li>
                        <li className="feature">
                            <span className="feature__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </span>
                            <div>
                                <h3>Learning Progress</h3>
                                <p>Track completed and pending modules.</p>
                            </div>
                        </li>
                        <li className="feature">
                            <span className="feature__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                            </span>
                            <div>
                                <h3>Admin Management</h3>
                                <p>Manage courses, students and reports.</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </PageShell>

        </>
    );
}
