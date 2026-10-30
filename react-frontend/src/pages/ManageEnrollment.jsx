import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function ManageEnrollment() {
    return (
        <>
            <PageCss href="/css/manage_enrollment.css" />
            <PageShell variant="admin" active="enroll" footer="admin"
                crumbs={[{ label: "Dashboard", to: "/admin-dashboard" }, { label: "Manage enrollments" }]}>
                <div className="page">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Manage Student Enrollments</h1>
                            <p className="page-head__sub">Review, approve, reject, and manage student enrollment requests. All enrollment requests submitted by students will be displayed here.</p>
                        </div>
                    </header>
                    <section className="stat-strip" aria-labelledby="summary-title">
                        <h2 className="visually-hidden" id="summary-title">Request summary</h2>
                        <div className="stat stat--brand">
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
                                <h3 className="stat__label">Total Requests</h3>
                                <div className="stat__value" id="totalRequests">0</div>
                            </div>
                        </div>
                        <div className="stat stat--success">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Approved</h3>
                                <div className="stat__value" id="approvedRequests">0</div>
                            </div>
                        </div>
                        <div className="stat stat--warning">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M5 22h14"></path>
                                    <path d="M5 2h14"></path>
                                    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                                    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Pending</h3>
                                <div className="stat__value" id="pendingRequests">0</div>
                            </div>
                        </div>
                        <div className="stat stat--danger">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Rejected</h3>
                                <div className="stat__value" id="rejectedRequests">0</div>
                            </div>
                        </div>
                    </section>
                    <section className="panel">
                        <header className="panel__head panel__head--tools">
                            <h2>Enrollment Requests</h2>
                            <div className="toolbar">
                                <div className="search-field">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                    <input type="text" id="searchEnrollment" placeholder="Search Enrollment Request..." aria-label="Search enrollment requests" />
                                </div>
                                <div className="select-field">
                                    <label className="visually-hidden" htmlFor="statusFilter">Filter by status</label>
                                    <select id="statusFilter">
                                        <option value="All">All Requests</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>
                        </header>
                        <div className="table-wrap">
                            <table className="data-table">
                                <caption className="visually-hidden">Student enrollment requests</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Student Name</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Enrollment Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="enrollmentTable">
                                    {/* Enrollment records loaded by JavaScript */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <div className="layout-even">
                        <section className="panel">
                            <header className="panel__head">
                                <h2>Selected Enrollment</h2>
                            </header>
                            <div className="panel__body">
                                <div id="selectedEnrollment" className="detail-empty">
                                    <h3>No Enrollment Selected</h3>
                                    <p>Select an enrollment request from the table above to view complete student and course information.</p>
                                    <p>Student details, enrolled course, enrollment date, approval status, and administrator actions will be displayed here.</p>
                                </div>
                            </div>
                        </section>
                        <section className="panel">
                            <header className="panel__head">
                                <h2>Recent Enrollment Activity</h2>
                            </header>
                            <div className="panel__body">
                                <div id="activityContainer" className="detail-empty">
                                    <h3>No Recent Activity</h3>
                                    <p>Recent enrollment activities will appear here after students submit enrollment requests.</p>
                                    <p>This section displays newly submitted requests, approved enrollments, rejected enrollments, and other enrollment-related activities.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="panel">
                        <header className="panel__head">
                            <h2>Recently Approved Enrollments</h2>
                        </header>
                        <div className="table-wrap">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Student</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Approved By</th>
                                        <th scope="col">Approval Date</th>
                                    </tr>
                                </thead>
                                <tbody id="approvedTable">
                                    {/* Approved enrollments loaded dynamically */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="panel">
                        <header className="panel__head">
                            <h2>Enrollment Summary</h2>
                        </header>
                        <div className="panel__body">
                            <div className="summary-grid">
                                <div className="summary-item">
                                    <h3>Total Enrollment Requests</h3>
                                    <div className="summary-item__value" id="summaryTotal">0</div>
                                    <p>Displays the total number of enrollment requests received.</p>
                                </div>
                                <div className="summary-item">
                                    <h3>Approved Requests</h3>
                                    <div className="summary-item__value" id="summaryApproved">0</div>
                                    <p>Shows the number of approved enrollments.</p>
                                </div>
                                <div className="summary-item">
                                    <h3>Pending Requests</h3>
                                    <div className="summary-item__value" id="summaryPending">0</div>
                                    <p>Shows enrollment requests awaiting approval.</p>
                                </div>
                                <div className="summary-item">
                                    <h3>Rejected Requests</h3>
                                    <div className="summary-item__value" id="summaryRejected">0</div>
                                    <p>Shows rejected enrollment requests.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="panel">
                        <header className="panel__head">
                            <div>
                                <h2>Remove Student Account</h2>
                                <p className="panel__sub">Permanently delete a student's login and all of their course and enrollment data. This cannot be undone.</p>
                            </div>
                        </header>
                        <div className="panel__body">
                            <div className="field-grid">
                                <div className="field">
                                    <label htmlFor="removeStudentEmail">Student</label>
                                    <select id="removeStudentEmail">
                                        <option value="">Select a student…</option>
                                    </select>
                                </div>
                            </div>
                            <div className="action-bar action-bar--top">
                                <button id="removeStudentBtn" className="btn btn--danger" type="button">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                    <span>Remove Student Account</span>
                                </button>
                            </div>
                            <p className="muted-note" id="removeStudentStatus"></p>
                        </div>
                    </section>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/manage_enrollment.js" />
            <LegacyScript src="/legacy/js/admin-students.js" />
        </>
    );
}
