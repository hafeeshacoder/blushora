import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function MyCourses() {
    return (
        <>
            <PageCss href="/css/my_courses.css" />
            <PageShell variant="student" active="my" footer="learn"
                crumbs={[{ label: "Dashboard", to: "/dashboard" }, { label: "My courses" }]}>
                <div className="page">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>My Learning Dashboard</h1>
                            <p className="page-head__sub">Welcome to your personalized learning space. Access all your enrolled courses, continue learning, track your progress, complete quizzes, submit assignments and download certificates after successfully finishing each course.</p>
                        </div>
                        <div className="count-chip">
                            <h2 id="totalCourses">0</h2>
                            <p>Enrolled Courses</p>
                        </div>
                    </header>
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
                                <h3 className="stat__label">Enrolled Courses</h3>
                                <div className="stat__value" id="enrolledCount">0</div>
                            </div>
                        </div>
                        <div className="stat stat--gold">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">In Progress</h3>
                                <div className="stat__value" id="progressCount">0</div>
                            </div>
                        </div>
                        <div className="stat stat--info">
                            <div className="stat__icon">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <div className="stat__body">
                                <h3 className="stat__label">Completed</h3>
                                <div className="stat__value" id="completedCount">0</div>
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
                                <h3 className="stat__label">Certificates</h3>
                                <div className="stat__value" id="certificateCount">0</div>
                            </div>
                        </div>
                    </section>
                    <div className="layout-main">
                        <section className="panel">
                            <header className="panel__head">
                                <h2>My Enrolled Courses</h2>
                            </header>
                            <div className="panel__body">
                                <div id="courseContainer">
                                    {/* JavaScript will generate enrolled course cards here */}
                                </div>
                            </div>
                        </section>
                        <div className="stack">
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Overall Learning Progress</h2>
                                        <p className="panel__sub">Monitor your learning progress across all enrolled courses.</p>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="progress-title">Overall Progress</div>
                                    <div className="progress">
                                        <div className="progress-fill" id="overallProgress" style={{width: "0%"}}></div>
                                    </div>
                                    <div className="progress-text" id="overallProgressText">0% Completed</div>
                                    <div className="course-info">
                                        <div className="info-box">
                                            <h4>Lessons Completed</h4>
                                            <p id="lessonCount">0</p>
                                        </div>
                                        <div className="info-box">
                                            <h4>Videos Watched</h4>
                                            <p id="videoCount">0</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Recent Activity</h2>
                                </header>
                                <div className="panel__body" id="activityContainer">
                                    <div className="empty">
                                        <h3>No Recent Activity</h3>
                                        <p>Your recently watched videos, completed lessons, submitted assignments and quiz attempts will appear here.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/my_courses.js" />
        </>
    );
}
