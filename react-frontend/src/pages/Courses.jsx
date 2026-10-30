import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";
import CourseCard from "../components/CourseCard";
import { useCourses } from "../context/CourseContext";

export default function Courses() {
    const {
        courses,
        loading,
        error
    } = useCourses();

    return (
        <>
            <PageCss href="/css/courses.css" />
            <PageShell variant="student" active="courses" footer="standard"
                crumbs={[{ label: "Dashboard", to: "/dashboard" }, { label: "Explore courses" }]}>
                <div className="page">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Available Courses</h1>
                            <p className="page-head__sub">Search the catalog, open a course to see what it covers, and enroll when you are ready.</p>
                        </div>
                    </header>
                    <section className="catalog" id="courseList" aria-label="Course catalog">
                        <div className="search-field">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            <input type="text" id="searchCourse" placeholder="Search Courses..." aria-label="Search courses" />
                        </div>
                        <div className="cards" id="courseContainer">
                            {loading && (
                                <p>Loading courses...</p>
                            )}
                            {error && (
                                <p>{error}</p>
                            )}
                            {!loading &&
                                !error &&
                                courses.map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        image={course.image}
                                        alt={course.courseName}
                                        title={course.courseName}
                                        description={course.overview}
                                        courseKey={course.id}
                                    />
                                ))
                            }
                        </div>
                    </section>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/courses.js" />
        </>
    );
}
