import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function AdminDashboard() {
    return (
        <>
            <PageCss href="/css/admin_dashboard.css" />
            <PageShell variant="admin" active="dashboard" footer="admin"
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
                                    <p className="dash-hero__eyebrow">Administrator Panel</p>
                                    <h1 className="dash-hero__title">Administrator Dashboard</h1>
                                    <p className="dash-hero__sub">Manage courses, student enrollments, reports and academic activities through a centralized administration panel.</p>
                                </div>
                            </div>
                            <div className="dash-hero__actions">
                                <Link to="/add-course" reloadDocument className="btn btn--primary">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M8 12h8"></path>
                                        <path d="M12 8v8"></path>
                                    </svg>
                                    <span>Add Course</span>
                                </Link>
                                <Link to="/manage-enrollment" reloadDocument className="btn btn--outline btn--on-dark">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                    <span>Manage Enrollments</span>
                                </Link>
                            </div>
                        </div>
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
                                <h3 className="stat__label">Total Courses</h3>
                                <div className="stat__value" id="totalCourses">0</div>
                            </div>
                        </div>
                        <div className="stat stat--gold">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Total Students</h3>
                                <div className="stat__value" id="totalStudents">0</div>
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
                                <h3 className="stat__label">Total Enrollments</h3>
                                <div className="stat__value" id="totalEnrollments">0</div>
                            </div>
                        </div>
                        <div className="stat stat--accent">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Course Completions</h3>
                                <div className="stat__value" id="courseCompletions">0</div>
                            </div>
                        </div>
                    </section>
                    <div className="layout-main">
                        <div className="stack">
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Course Management</h2>
                                    <div className="panel__actions">
                                        <Link to="/add-course" reloadDocument className="btn btn--primary btn--sm">
                                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M8 12h8"></path>
                                                <path d="M12 8v8"></path>
                                            </svg>
                                            <span>Add New Course</span>
                                        </Link>
                                        <Link to="/edit-course" reloadDocument className="btn btn--outline btn--sm">
                                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                            </svg>
                                            <span>Edit / Delete Courses</span>
                                        </Link>
                                    </div>
                                </header>
                                <div className="table-wrap">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Course Name</th>
                                                <th scope="col">Instructor</th>
                                                <th scope="col">Level</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="courseTable">
                                            {/* Loaded by admin_dashboard.js */}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Student Enrollments</h2>
                                    <div className="panel__actions">
                                        <Link to="/manage-enrollment" reloadDocument className="btn btn--outline btn--sm">
                                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                            <span>Manage Enrollments</span>
                                        </Link>
                                    </div>
                                </header>
                                <div className="table-wrap">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Student Name</th>
                                                <th scope="col">Course</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="enrollmentTable">
                                            {/* Loaded by admin_dashboard.js */}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Reports Overview</h2>
                                </header>
                                <div className="table-wrap">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Report</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Student Performance</td>
                                                <td>Available</td>
                                            </tr>
                                            <tr>
                                                <td>Course Completion</td>
                                                <td>Available</td>
                                            </tr>
                                            <tr>
                                                <td>Enrollment Summary</td>
                                                <td>Available</td>
                                            </tr>
                                            <tr>
                                                <td>Attendance Report</td>
                                                <td>Available</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>System Notifications</h2>
                                </header>
                                <div className="panel__body" id="notificationContainer">
                                    <p className="muted-note">No new notifications available.</p>
                                </div>
                            </section>
                        </div>
                        <div className="stack">
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Admin Tools</h2>
                                </header>
                                <div className="panel__body panel__body--flush">
                                    <ul className="tool-list">
                                        <li>
                                            <Link to="/add-course" reloadDocument className="tool">
                                                <span className="tool__icon">
                                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <path d="M8 12h8"></path>
                                                        <path d="M12 8v8"></path>
                                                    </svg>
                                                </span>
                                                <span className="tool__label">Add Course</span>
                                                <svg className="icon tool__go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/edit-course" reloadDocument className="tool">
                                                <span className="tool__icon">
                                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                                    </svg>
                                                </span>
                                                <span className="tool__label">Edit / Delete Courses</span>
                                                <svg className="icon tool__go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/manage-enrollment" reloadDocument className="tool">
                                                <span className="tool__icon">
                                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                    </svg>
                                                </span>
                                                <span className="tool__label">Manage Enrollments</span>
                                                <svg className="icon tool__go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section className="panel" id="studentAccountsPanel">
                                <header className="panel__head">
                                    <h2>Student Accounts</h2>
                                    <div className="panel__actions">
                                        <button type="button" id="exportStudentsBtn" className="btn btn--primary btn--sm">
                                            <span>Export CSV</span>
                                        </button>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <p className="panel__sub">
                                        Reset a password to send the student a new one in their messages. The export includes the
                                        passwords set by an administrator. Other passwords are stored securely and cannot be exported.
                                    </p>
                                    <p id="studentAccountsStatus" role="status"></p>
                                    <div className="table-wrap">
                                        <table className="data-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Student ID</th>
                                                    <th scope="col">Department</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody id="studentAccountsTable">
                                                {/* Loaded by admin-student-tools.js */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Dashboard Overview</h2>
                                </header>
                                <div className="panel__body">
                                    <div className="chart-placeholder" aria-hidden="true">
                                        <svg viewBox="0 0 240 110" preserveAspectRatio="xMidYMid meet" role="img" focusable="false">
                                            <line x1="8" y1="100" x2="232" y2="100" className="cp-axis"></line>
                                            <line x1="8" y1="60" x2="232" y2="60" className="cp-grid"></line>
                                            <line x1="8" y1="20" x2="232" y2="20" className="cp-grid"></line>
                                            <polyline points="14,84 60,66 106,72 152,42 198,50 228,24" className="cp-line"></polyline>
                                            <circle cx="14" cy="84" r="3.5" className="cp-dot"></circle>
                                            <circle cx="60" cy="66" r="3.5" className="cp-dot"></circle>
                                            <circle cx="106" cy="72" r="3.5" className="cp-dot"></circle>
                                            <circle cx="152" cy="42" r="3.5" className="cp-dot"></circle>
                                            <circle cx="198" cy="50" r="3.5" className="cp-dot"></circle>
                                            <circle cx="228" cy="24" r="3.5" className="cp-dot cp-dot--hi"></circle>
                                        </svg>
                                    </div>
                                    <p className="muted-note">Analytics, charts, course statistics, enrollment trends and overall system insights will be displayed here after backend integration.</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/admin_dashboard.js" />
            <LegacyScript src="/legacy/js/admin-student-tools.js" />
        </>
    );
}
