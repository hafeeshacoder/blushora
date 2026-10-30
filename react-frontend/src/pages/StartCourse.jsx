import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function StartCourse() {
    return (
        <>
            <PageCss href="/css/start_course.css" />
            <PageShell variant="student" active="my" footer="learn"
                crumbs={[{ label: "Dashboard", to: "/dashboard" }, { label: "My courses", to: "/my-courses" }, { label: "Start course" }]}>
                <div className="page page--learn">
                    <section className="course-hero">
                        <div className="course-hero__copy">
                            <h1 id="title">Course Name</h1>
                            <p id="overview">Course Overview</p>
                            <dl className="facts facts--inline">
                                <div className="facts__row">
                                    <dt>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <span>Instructor</span>
                                    </dt>
                                    <dd id="instructor"></dd>
                                </div>
                                <div className="facts__row">
                                    <dt>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        <span>Duration</span>
                                    </dt>
                                    <dd id="duration"></dd>
                                </div>
                                <div className="facts__row">
                                    <dt>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M2 20h.01"></path>
                                            <path d="M7 20v-4"></path>
                                            <path d="M12 20v-8"></path>
                                            <path d="M17 20V8"></path>
                                            <path d="M22 4v16"></path>
                                        </svg>
                                        <span>Level</span>
                                    </dt>
                                    <dd id="level"></dd>
                                </div>
                                <div className="facts__row">
                                    <dt>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                                        </svg>
                                        <span>Mode</span>
                                    </dt>
                                    <dd id="mode"></dd>
                                </div>
                            </dl>
                        </div>
                        <div className="course-hero__media">
                            <img id="courseImage" src="" alt="Course Image" />
                        </div>
                    </section>
                    <div className="learn-layout">
                        <section className="panel learn-progress">
                            <header className="panel__head">
                                <h2>Your Learning Progress</h2>
                            </header>
                            <div className="panel__body">
                                <div className="meter" role="progressbar" aria-label="Course progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                    <div className="meter__fill" id="progressBar"></div>
                                </div>
                                <div className="progress-text" id="progressText">0% Completed</div>
                                <button className="btn btn--primary btn--block start-btn" type="button">Continue Learning</button>
                            </div>
                        </section>
                        <section className="panel learn-videos">
                            <header className="panel__head">
                                <div>
                                    <h2>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path>
                                            <path d="M12 17v4"></path>
                                            <path d="M8 21h8"></path>
                                            <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                                        </svg>
                                        <span>Video Lessons</span>
                                    </h2>
                                    <p className="panel__sub">Watch the lessons in order. Each course loads its own YouTube videos automatically based on the selected course.</p>
                                </div>
                            </header>
                            <div className="panel__body">
                                <div id="videoContainer" className="grid">
                                    {/* Videos loaded by JavaScript */}
                                </div>
                            </div>
                        </section>
                        <section className="panel learn-materials">
                            <header className="panel__head">
                                <div>
                                    <h2>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M12 7v14"></path>
                                            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                        </svg>
                                        <span>Study Materials</span>
                                    </h2>
                                    <p className="panel__sub">These learning resources are official documentation and trusted learning websites related to your selected course.</p>
                                </div>
                            </header>
                            <div className="panel__body">
                                <div id="materialContainer" className="grid">
                                    {/* Materials loaded by JavaScript */}
                                </div>
                            </div>
                        </section>
                        <div className="learn-finish stack">
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                        <span>Complete Course</span>
                                    </h2>
                                </header>
                                <div className="panel__body">
                                    <p className="panel__text">After completing all lessons, assignments and quizzes, click the button below to finish this course.</p>
                                    <button id="completeBtn" className="btn btn--success btn--lg btn--block" type="button">Complete Course</button>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                            <circle cx="12" cy="8" r="6"></circle>
                                        </svg>
                                        <span>Course Certificate</span>
                                    </h2>
                                </header>
                                <div className="panel__body">
                                    <p className="panel__text">Once the course is completed, your completion certificate becomes available.</p>
                                    <button id="certificateBtn" className="btn btn--primary btn--lg btn--block" type="button" disabled>View Certificate</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/start_course.js" />
        </>
    );
}
