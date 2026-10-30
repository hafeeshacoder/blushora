import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function EnrollmentSuccess() {
    return (
        <>
            <PageCss href="/css/enrollment_success.css" />
            <PageShell variant="student" active="courses" footer="standard"
                crumbs={[{ label: "Dashboard", to: "/dashboard" }, { label: "Explore courses", to: "/courses" }, { label: "Enrollment successful" }]}>
                <div className="page page--narrow">
                    <section className="success-panel panel">
                        <div className="success-mark" aria-hidden="true">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <h1>Enrollment Successful!</h1>
                        <p className="success-panel__lead">Congratulations! You have successfully enrolled in the selected course. Your enrollment has been confirmed and you can now begin learning immediately.</p>
                        <dl className="summary-list">
                            <div className="summary-list__row">
                                <dt>Course</dt>
                                <dd id="courseName">Python Programming</dd>
                            </div>
                            <div className="summary-list__row">
                                <dt>Enrollment Date</dt>
                                <dd id="enrollDate">--</dd>
                            </div>
                            <div className="summary-list__row">
                                <dt>Student ID</dt>
                                <dd>STU2026001</dd>
                            </div>
                            <div className="summary-list__row">
                                <dt>Status</dt>
                                <dd>
                                    <span className="badge" data-tone="success">Successfully Enrolled</span>
                                </dd>
                            </div>
                        </dl>
                        <div className="buttons">
                            <button className="btn btn--primary successBtn" type="button" onClick={() => window.eval("goToMyCourses()")}>My Courses</button>
                            <Link to="/courses" reloadDocument className="btn btn--outline primary">Browse More Courses</Link>
                            <Link to="/dashboard" reloadDocument className="btn btn--ghost secondary">Student Dashboard</Link>
                        </div>
                    </section>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/enrollment_success.js" />
        </>
    );
}
