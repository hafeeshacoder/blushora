import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function EditCourse() {
    return (
        <>
            <PageCss href="/css/edit_courses.css" />
            <PageShell variant="admin" active="edit" footer="admin"
                crumbs={[{ label: "Dashboard", to: "/admin-dashboard" }, { label: "Edit courses" }]}>
                <div className="page page--form">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Edit Existing Courses</h1>
                            <p className="page-head__sub">Select one of the available courses below to update its information, syllabus, videos, materials or instructor details. Only courses available in the Course Catalog can be edited.</p>
                        </div>
                    </header>
                    <div className="edit-layout">
                        <aside className="edit-list" aria-label="Available courses">
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Available Courses</h2>
                                        <p className="panel__sub">Choose a course below to edit its information.</p>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="search-field">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </svg>
                                        <input type="text" id="searchCourse" placeholder="Search Course Name..." aria-label="Search course name" />
                                    </div>
                                    <div id="courseList" className="course-picker">
                                        {/* Courses will be loaded dynamically from edit_course.js */}
                                    </div>
                                </div>
                            </section>
                        </aside>
                        <div className="edit-form">
                            <section className="panel">
                                <header className="panel__head">
                                    <div>
                                        <h2>Edit Selected Course</h2>
                                        <p className="panel__sub">After selecting a course, its details will automatically appear below.</p>
                                    </div>
                                </header>
                                <div className="panel__body">
                                    <div className="field-grid">
                                        <div className="field">
                                            <label htmlFor="courseName">Course Name</label>
                                            <input type="text" placeholder="Course Name" id="courseName" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="courseCode">Course Code</label>
                                            <input type="text" placeholder="CS101" id="courseCode" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="instructor">Instructor</label>
                                            <input type="text" placeholder="Instructor Name" id="instructor" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="duration">Duration</label>
                                            <input type="text" placeholder="8 Weeks" id="duration" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="level">Course Level</label>
                                            <select id="level">
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="category">Category</label>
                                            <select id="category">
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
                                            <input type="text" placeholder="https://..." id="image" />
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
                                        <textarea id="overview" rows="8" placeholder="Enter course overview..."></textarea>
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
                                            <label htmlFor="outcome1">Outcome 1</label>
                                            <input type="text" placeholder="" id="outcome1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome2">Outcome 2</label>
                                            <input type="text" placeholder="" id="outcome2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome3">Outcome 3</label>
                                            <input type="text" placeholder="" id="outcome3" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome4">Outcome 4</label>
                                            <input type="text" placeholder="" id="outcome4" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="outcome5">Outcome 5</label>
                                            <input type="text" placeholder="" id="outcome5" />
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
                                            <label htmlFor="pre1">Prerequisite 1</label>
                                            <input type="text" placeholder="" id="pre1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="pre2">Prerequisite 2</label>
                                            <input type="text" placeholder="" id="pre2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="pre3">Prerequisite 3</label>
                                            <input type="text" placeholder="" id="pre3" />
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
                                            <input type="text" placeholder="Introduction" id="module1" />
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
                                            <input type="text" placeholder="Final Assessment" id="module5" />
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
                                            <label htmlFor="video1">Video Lesson 1</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="video1" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="video2">Video Lesson 2</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="video2" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="video3">Video Lesson 3</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="video3" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="video4">Video Lesson 4</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="video4" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="video5">Video Lesson 5</label>
                                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." id="video5" />
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
                                            <label htmlFor="notes">Lecture Notes</label>
                                            <input type="text" placeholder="Python Notes.pdf" id="notes" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="lab">Lab Manual</label>
                                            <input type="text" placeholder="Lab Manual.pdf" id="lab" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="assignment">Assignment</label>
                                            <input type="text" placeholder="Assignment.pdf" id="assignment" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="reference">Reference Book</label>
                                            <input type="text" placeholder="Reference Book" id="reference" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="resource">Additional Resource</label>
                                            <input type="text" placeholder="Documentation / GitHub" id="resource" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="panel">
                                <header className="panel__head">
                                    <h2>Course Preview</h2>
                                </header>
                                <div className="panel__body">
                                    <div className="preview-frame preview-frame--wide">
                                        <img id="previewImage" src="https://picsum.photos/900/350" alt="Course Preview" />
                                    </div>
                                </div>
                            </section>
                            <div className="action-bar">
                                <button id="updateBtn" className="btn btn--primary" type="button">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                                        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                                        <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                                    </svg>
                                    <span>Update Course</span>
                                </button>
                                <button id="deleteBtn" className="btn btn--danger" type="button">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                    <span>Delete Course</span>
                                </button>
                                <button id="resetBtn" className="btn btn--outline" type="button">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                        <path d="M3 3v5h5"></path>
                                    </svg>
                                    <span>Reset</span>
                                </button>
                                <Link to="/admin-dashboard" reloadDocument className="btn btn--ghost">
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="m12 19-7-7 7-7"></path>
                                        <path d="M19 12H5"></path>
                                    </svg>
                                    <span>Back to Dashboard</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/edit_course.js" />
        </>
    );
}
