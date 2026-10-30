import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function AddCourse() {
    return (
        <>
            <PageCss href="/css/add_course.css" />
            <PageShell variant="admin" active="add" footer="admin"
                crumbs={[{ label: "Dashboard", to: "/admin-dashboard" }, { label: "Add course" }]}>
                <div className="page page--form">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Add New Course</h1>
                            <p className="page-head__sub">Create a new course by entering all the required information. The course will be available for students after publishing.</p>
                        </div>
                    </header>
                    <div className="form-layout">
                        <div className="form-main">
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Course Information</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="courseName">
                                                Course Name{" "}
                                                <span className="req" aria-hidden="true">*</span>
                                            </label>
                                            <input type="text" placeholder="Enter Course Name" id="courseName" aria-required="true" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="courseCode">
                                                Course Code{" "}
                                                <span className="req" aria-hidden="true">*</span>
                                            </label>
                                            <input type="text" placeholder="Example: CS101" id="courseCode" aria-required="true" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="instructor">
                                                Instructor Name{" "}
                                                <span className="req" aria-hidden="true">*</span>
                                            </label>
                                            <input type="text" placeholder="Enter Instructor Name" id="instructor" aria-required="true" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="duration">Duration</label>
                                            <input type="text" placeholder="Example: 8 Weeks" id="duration" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="level">Course Level</label>
                                            <select id="level">
                                                <option>Select Level</option>
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="category">Category</label>
                                            <select id="category">
                                                <option>Select Category</option>
                                                <option>Programming</option>
                                                <option>Web Development</option>
                                                <option>Database</option>
                                                <option>Artificial Intelligence</option>
                                                <option>Machine Learning</option>
                                                <option>Cloud Computing</option>
                                                <option>Cyber Security</option>
                                                <option>Mobile App Development</option>
                                                <option>DevOps</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="image">Course Image URL</label>
                                            <input type="text" placeholder="Paste Image URL" id="image" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="status">Status</label>
                                            <select id="status">
                                                <option>Active</option>
                                                <option>Draft</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Course Description</h2>
                                </header>
                                <div className="panel__body">
                                    <div className="field">
                                        <label htmlFor="overview">Course Overview</label>
                                        <textarea placeholder="Enter a detailed overview of the course, its objectives, learning approach and expected outcomes." id="overview" rows="6"></textarea>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Learning Outcomes</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="outcome">Outcome 1</label>
                                            <input type="text" placeholder="Example: Understand programming fundamentals" id="outcome" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome2">Outcome 2</label>
                                            <input type="text" placeholder="Example: Build real-world applications" id="outcome2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome3">Outcome 3</label>
                                            <input type="text" placeholder="Example: Develop problem-solving skills" id="outcome3" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome4">Outcome 4</label>
                                            <input type="text" placeholder="Example: Work with industry tools" id="outcome4" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome5">Outcome 5</label>
                                            <input type="text" placeholder="Example: Prepare for certification" id="outcome5" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Course Prerequisites</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="prerequistite1">Prerequisite 1</label>
                                            <input type="text" placeholder="Example: Basic Computer Knowledge" id="prerequistite1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="prerequisite2">Prerequisite 2</label>
                                            <input type="text" placeholder="Example: Internet Access" id="prerequisite2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="prerequisite3">Prerequisite 3</label>
                                            <input type="text" placeholder="Example: No prior programming experience required" id="prerequisite3" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Course Syllabus</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="module1">Module 1</label>
                                            <input type="text" placeholder="Introduction and Course Overview" id="module1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="module2">Module 2</label>
                                            <input type="text" placeholder="Core Concepts" id="module2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="module3">Module 3</label>
                                            <input type="text" placeholder="Practical Sessions" id="module3" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="module4">Module 4</label>
                                            <input type="text" placeholder="Mini Project" id="module4" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="module5">Module 5</label>
                                            <input type="text" placeholder="Assessment and Certification" id="module5" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Video Lessons</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="v1">Video Lesson 1</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="v1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="v2">Video Lesson 2</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="v2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="v3">Video Lesson 3</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="v3" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="v4">Video Lesson 4</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="v4" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="v5">Video Lesson 5</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="v5" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Course Materials</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="l1">Lecture Notes (PDF)</label>
                                            <input type="text" placeholder="Python Notes.pdf" id="l1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="lab">Lab Manual</label>
                                            <input type="text" placeholder="Python Lab Manual.pdf" id="lab" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="reference">Reference Book</label>
                                            <input type="text" placeholder="Programming Reference.pdf" id="reference" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="additional">Additional Resources</label>
                                            <input type="text" placeholder="GitHub / Documentation / Website" id="additional" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Course Settings</h2>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="maxstudents">Maximum Students</label>
                                            <input type="number" placeholder="100" id="maxstudents" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="courselanguage">Course Language</label>
                                            <select id="courselanguage">
                                                <option>English</option>
                                                <option>Tamil</option>
                                                <option>Hindi</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="certificateavailability">Certificate Available</label>
                                            <select id="certificateavailability">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="enrollmenttype">Enrollment Type</label>
                                            <select id="enrollmenttype">
                                                <option>Open</option>
                                                <option>Approval Required</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="sd">Course Start Date</label>
                                            <input type="date" placeholder="" id="sd" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="ed">Course End Date</label>
                                            <input type="date" placeholder="" id="ed" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <aside className="form-rail" aria-label="Preview and actions">
                            <section className="panel rail-card">
                                <h2 className="rail-card__title">Course Preview</h2>
                                <div className="preview-frame">
                                    <img src="https://picsum.photos/900/350" id="previewImage" alt="Course preview" />
                                </div>
                                <p className="muted-note">The selected course image will appear here after backend integration.</p>
                                <div className="rail-card__actions">
                                    <button id="publishBtn" className="btn btn--primary btn--lg btn--block" type="button">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                                            <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                                            <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                                        </svg>
                                        <span>Publish Course</span>
                                    </button>
                                    <button id="draftBtn" className="btn btn--outline btn--block" type="button">Save Draft</button>
                                    <button type="reset" id="resetBtn" className="btn btn--ghost btn--block">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                            <path d="M3 3v5h5"></path>
                                        </svg>
                                        <span>Reset</span>
                                    </button>
                                    <Link to="/admin-dashboard" reloadDocument className="btn btn--ghost btn--block">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <path d="m12 19-7-7 7-7"></path>
                                            <path d="M19 12H5"></path>
                                        </svg>
                                        <span>Back</span>
                                    </Link>
                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/add_course.js" />
        </>
    );
}
