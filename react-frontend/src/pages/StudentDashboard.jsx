import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function StudentDashboard() {
    return (
        <>
            <PageCss href="/css/student_dashboard.css" />
            <PageShell variant="student" active="dashboard" footer="standard"
                crumbs={[{ label: "Dashboard" }]}>
                <div className="page">
                    <section className="dash-hero">
                        <div className="dash-hero__row">
                            <div className="dash-hero__intro">
                                <span className="avatar avatar--lg avatar--on-dark" aria-hidden="true">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </span>
                                <div>
                                    <p className="dash-hero__eyebrow">Welcome back</p>
                                    <h1 className="dash-hero__title">Student Dashboard</h1>
                                    <p className="dash-hero__sub">Manage your enrolled courses, monitor your learning progress, and stay updated with your academic activities from one place.</p>
                                </div>
                            </div>
                            <div className="dash-hero__actions">
                                <Link to="/courses" reloadDocument className="btn btn--primary">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                    <span>Explore Courses</span>
                                </Link>
                                <Link to="/my-courses" reloadDocument className="btn btn--outline btn--on-dark">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="m16 6 4 14"></path>
                                        <path d="M12 6v14"></path>
                                        <path d="M8 8v12"></path>
                                        <path d="M4 4v16"></path>
                                    </svg>
                                    <span>My Courses</span>
                                </Link>
                            </div>
                        </div>
                        <dl className="dash-hero__meta">
                            <div className="dash-hero__meta-item">
                                <dt>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                    <span>Email</span>
                                </dt>
                                <dd id="studentEmail"></dd>
                            </div>
                            <div className="dash-hero__meta-item">
                                <dt>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                        <path d="M10 6h4"></path>
                                        <path d="M10 10h4"></path>
                                        <path d="M10 14h4"></path>
                                        <path d="M10 18h4"></path>
                                    </svg>
                                    <span>Department</span>
                                </dt>
                                <dd id="studentDepartment"></dd>
                            </div>
                        </dl>
                    </section>
                    <section className="stat-strip" aria-labelledby="summary-title">
                        <h2 className="visually-hidden" id="summary-title">Summary</h2>
                        <div className="stat stat--brand">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Courses Enrolled</h3>
                                <div className="stat__value" id="enrolledCount">0</div>
                            </div>
                        </div>
                        <div className="stat stat--gold">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Courses Completed</h3>
                                <div className="stat__value" id="completedCount">0</div>
                            </div>
                        </div>
                        <div className="stat stat--info">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <path d="M12 11h4"></path>
                                    <path d="M12 16h4"></path>
                                    <path d="M8 11h.01"></path>
                                    <path d="M8 16h.01"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Assignments Submitted</h3>
                                <div className="stat__value" id="assignmentCount">0</div>
                            </div>
                        </div>
                        <div className="stat stat--accent">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Overall Progress</h3>
                                <div className="stat__value" id="overallProgress">0%</div>
                            </div>
                        </div>
                    </section>
                    <div className="layout-main">
                        <div className="stack">
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>My Courses</h2>
                                </header>
                                <div className="table-wrap">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Course</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Progress</th>
                                            </tr>
                                        </thead>
                                        <tbody id="courseTable"></tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Recent Notifications</h2>
                                </header>
                                <div className="panel__body" id="notificationContainer"></div>
                            </section>
                        </div>
                        <div className="stack">
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Learning Progress</h2>
                                </header>
                                <div className="panel__body">
                                    <div className="chart-placeholder" aria-hidden="true">
                                        <svg viewBox="0 0 240 110" preserveAspectRatio="xMidYMid meet" role="img" focusable="false">
                                            <line x1="8" y1="100" x2="232" y2="100" className="cp-axis"></line>
                                            <line x1="8" y1="60" x2="232" y2="60" className="cp-grid"></line>
                                            <line x1="8" y1="20" x2="232" y2="20" className="cp-grid"></line>
                                            <rect x="24" y="64" width="26" height="36" rx="3" className="cp-bar"></rect>
                                            <rect x="66" y="46" width="26" height="54" rx="3" className="cp-bar"></rect>
                                            <rect x="108" y="56" width="26" height="44" rx="3" className="cp-bar"></rect>
                                            <rect x="150" y="30" width="26" height="70" rx="3" className="cp-bar cp-bar--hi"></rect>
                                            <rect x="192" y="40" width="26" height="60" rx="3" className="cp-bar"></rect>
                                        </svg>
                                    </div>
                                    <p className="muted-note">Progress analytics will be displayed here.</p>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Quick Overview</h2>
                                </header>
                                <div className="panel__body" id="quickOverview"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/student_dashboard.js" />
            <LegacyScript src="/legacy/js/notifications.js" />
        </>
    );
}
