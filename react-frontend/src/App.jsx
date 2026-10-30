import {
    Routes,
    Route
} from "react-router-dom";


import Home
    from "./pages/Home";

import Login
    from "./pages/Login";

import Register
    from "./pages/Register";

import AdminRegister
    from "./pages/AdminRegister";

import StudentDashboard
    from "./pages/StudentDashboard";

import AdminDashboard
    from "./pages/AdminDashboard";

import Courses
    from "./pages/Courses";

import CourseDetails
    from "./pages/CourseDetails";

import MyCourses
    from "./pages/MyCourses";

import StartCourse
    from "./pages/StartCourse";

import Certificate
    from "./pages/Certificate";

import EnrollmentSuccess
    from "./pages/EnrollmentSuccess";

import ManageEnrollment
    from "./pages/ManageEnrollment";

import AddCourse
    from "./pages/AddCourse";

import EditCourse
    from "./pages/EditCourse";

import ForgotPassword
    from "./pages/ForgotPassword";

import ResetPassword
    from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";
import ChangePassword from "./pages/ChangePassword";

function App() {

    return (

        <Routes>

            {/* HOME */}

            <Route
                path="/"
                element={<Home />}
            />


            {/* LOGIN */}

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/login.html"
                element={<Login />}
            />


            {/* REGISTER */}

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/student_register.html"
                element={<Register />}
            />


            <Route
                path="/admin-register"
                element={<AdminRegister />}
            />

            <Route
                path="/admin_register.html"
                element={<AdminRegister />}
            />


            {/* PASSWORD */}

            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />

            <Route
                path="/forgot_password.html"
                element={<ForgotPassword />}
            />


            <Route
                path="/reset-password"
                element={<ResetPassword />}
            />

            <Route
                path="/reset_password.html"
                element={<ResetPassword />}
            />


            {/* STUDENT DASHBOARD */}

            <Route
                path="/dashboard"
                element={<StudentDashboard />}
            />

            <Route
                path="/student-dashboard"
                element={<StudentDashboard />}
            />

            <Route
                path="/student_dashboard.html"
                element={<StudentDashboard />}
            />


            {/* ADMIN DASHBOARD */}

            <Route
                path="/admin-dashboard"
                element={<AdminDashboard />}
            />

            <Route
                path="/admin_dashboard.html"
                element={<AdminDashboard />}
            />


            {/* COURSES */}

            <Route
                path="/courses"
                element={<Courses />}
            />

            <Route
                path="/courses.html"
                element={<Courses />}
            />


            {/* COURSE DETAILS */}

            <Route
                path="/course-details"
                element={<CourseDetails />}
            />

            <Route
                path="/course_details.html"
                element={<CourseDetails />}
            />


            <Route
                path="/courses/:courseKey"
                element={<CourseDetails />}
            />


            {/* MY COURSES */}

            <Route
                path="/my-courses"
                element={<MyCourses />}
            />

            <Route
                path="/my_courses.html"
                element={<MyCourses />}
            />


            {/* START COURSE */}

            <Route
                path="/start-course"
                element={<StartCourse />}
            />

            <Route
                path="/start_course.html"
                element={<StartCourse />}
            />


            {/* CERTIFICATE */}

            <Route
                path="/certificate"
                element={<Certificate />}
            />

            <Route
                path="/certificate.html"
                element={<Certificate />}
            />


            {/* ENROLLMENT SUCCESS */}

            <Route
                path="/enrollment-success"
                element={<EnrollmentSuccess />}
            />

            <Route
                path="/enrollment_success.html"
                element={<EnrollmentSuccess />}
            />


            {/* ADMIN MANAGEMENT */}

            <Route
                path="/manage-enrollment"
                element={<ManageEnrollment />}
            />

            <Route
                path="/manage_enrollment.html"
                element={<ManageEnrollment />}
            />


            <Route
                path="/add-course"
                element={<AddCourse />}
            />

            <Route
                path="/add_course.html"
                element={<AddCourse />}
            />


            <Route
                path="/edit-course"
                element={<EditCourse />}
            />

            <Route
                path="/edit_course.html"
                element={<EditCourse />}
            />
            <Route path="/messages" element={<Messages />} />
            <Route path="/change-password" element={<ChangePassword />} />

            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}


export default App;