import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import api from "../api/apiClient";

const CourseContext = createContext(null);

export function CourseProvider({ children }) {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    async function fetchCourses() {

        try {

            setLoading(true);

            const response =
                await api.get("/courses");

            setCourses(response.data.courses);

            setError(null);

        } catch (error) {

            console.error(
                "Failed to fetch courses:",
                error
            );

            setError(
                "Unable to load courses."
            );

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        fetchCourses();

    }, []);

    async function addCourse(course) {

        const response = await api.post("/courses", course);

        setCourses((previousCourses) => [
            ...previousCourses,
            response.data.course
        ]);

    }

    async function updateCourse(
        id,
        updatedCourse
    ) {

        const response =
            await api.put(
                `/courses/${id}`,
                updatedCourse
            );

        setCourses((previousCourses) =>
            previousCourses.map(
                (course) =>
                    course.id === id
                        ? response.data.course
                        : course
            )
        );

    }

    async function deleteCourse(id) {

        await api.delete(
            `/courses/${id}`
        );

        setCourses((previousCourses) =>
            previousCourses.filter(
                (course) =>
                    course.id !== id
            )
        );

    }

    return (

        <CourseContext.Provider
            value={{
                courses,
                loading,
                error,
                fetchCourses,
                addCourse,
                updateCourse,
                deleteCourse
            }}
        >

            {children}

        </CourseContext.Provider>

    );

}

export function useCourses() {

    return useContext(
        CourseContext
    );

}
