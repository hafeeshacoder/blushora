// ===============================
// ADMIN DASHBOARD
// ===============================

// Default Courses (used if localStorage is empty)

const defaultCourses = [

{
key: "python",
title: "Python Programming",
instructor: "John Smith",
level: "Beginner"
},

{
key: "java",
title: "Java Programming",
instructor: "David Wilson",
level: "Intermediate"
},

{
key: "web",
title: "Web Development",
instructor: "Sophia Johnson",
level: "Beginner"
},

{
key: "database",
title: "Database Management",
instructor: "Michael Brown",
level: "Intermediate"
},

{
key: "machinelearning",
title: "Machine Learning",
instructor: "Andrew Thomas",
level: "Advanced"
},

{
key: "artificialintelligence",
title: "Artificial Intelligence",
instructor: "Sarah Lee",
level: "Advanced"
},

{
key: "cybersecurity",
title: "Cyber Security",
instructor: "Robert King",
level: "Intermediate"
},

{
key: "cloudcomputing",
title: "Cloud Computing",
instructor: "Emily Davis",
level: "Intermediate"
},

{
key: "mobiledevelopment",
title: "Mobile Development",
instructor: "James Miller",
level: "Beginner"
},

{
key: "devops",
title: "DevOps",
instructor: "Daniel Scott",
level: "Advanced"
}

];

// ===============================
// KEY MIGRATION (for admins who already had courses saved
// before this "key" field existed — matches them up by their
// original default title so edits/deletes keep working)
// ===============================

const DEFAULT_KEY_TITLES = {
    python: "Python Programming",
    java: "Java Programming",
    web: "Web Development",
    database: "Database Management",
    machinelearning: "Machine Learning",
    artificialintelligence: "Artificial Intelligence",
    cybersecurity: "Cyber Security",
    cloudcomputing: "Cloud Computing",
    mobiledevelopment: "Mobile Development",
    devops: "DevOps"
};

// ===============================
// LOAD COURSES
// ===============================

let courses =
JSON.parse(localStorage.getItem("courses"));

if (!courses) {

courses = defaultCourses;

localStorage.setItem(
"courses",
JSON.stringify(courses)
);

}

// Backfill "key" on any pre-existing saved courses that match a default title
let coursesKeyMigrated = false;

courses.forEach(c => {

    if (!c.key) {

        const foundKey = Object.keys(DEFAULT_KEY_TITLES).find(
            k => DEFAULT_KEY_TITLES[k] === c.title
        );

        if (foundKey) {

            c.key = foundKey;
            coursesKeyMigrated = true;

        }

    }

});

if (coursesKeyMigrated) {

    localStorage.setItem("courses", JSON.stringify(courses));

}

// ===============================
// LOAD ENROLLMENTS
// ===============================

let enrollments =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

// ===============================
// UPDATE DASHBOARD STATISTICS
// ===============================

function loadStatistics() {

document.getElementById("totalCourses").textContent =
courses.length;

const students =
JSON.parse(localStorage.getItem("students")) || [];

document.getElementById("totalStudents").textContent =
students.length;

document.getElementById("totalEnrollments").textContent =
enrollments.length;

document.getElementById("courseCompletions").textContent =
enrollments.filter(item => item.completed).length;

}

// ===============================
// LOAD COURSE TABLE
// ===============================

function loadCourses() {

const table =
document.getElementById("courseTable");

table.innerHTML = "";

courses.forEach((course,index)=>{

table.innerHTML += `

<tr>

<td>${course.title}</td>

<td>${course.instructor}</td>

<td>${course.level}</td>

<td>${course.status || "Active"}</td>

<td>

<button
class="action-btn"
onclick="editCourse(${index})">

Edit

</button>

<button
class="delete-btn"
onclick="deleteCourse(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

// ===============================
// DELETE COURSE
// ===============================

function deleteCourse(index){

if(confirm("Delete this course?")){

courses.splice(index,1);

localStorage.setItem(
"courses",
JSON.stringify(courses)
);

loadCourses();

loadStatistics();

}

}

// ===============================
// EDIT COURSE
// ===============================

function editCourse(index){

localStorage.setItem(
"editCourseIndex",
index
);

window.location.href =
"edit_course.html";

}
// ===============================
// LOAD STUDENT ENROLLMENTS
// ===============================

// ===============================
// LOAD STUDENT ENROLLMENTS
// ===============================

function loadEnrollments() {

    const table = document.getElementById("enrollmentTable");

    if (!table) return;

    table.innerHTML = "";

    if (enrollments.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="3" style="text-align:center;color:gray;">
                No enrollments found.
            </td>
        </tr>
        `;

        return;
    }

    enrollments.forEach((enrollment) => {

        table.innerHTML += `
        <tr>
            <td>${enrollment.student || "Student"}</td>
            <td>${enrollment.title || "Course"}</td>
            <td>${enrollment.completed ? "Completed" : "Enrolled"}</td>
        </tr>
        `;

    });

}

// ===============================
// LOAD NOTIFICATIONS
// ===============================

function loadNotifications() {

const container =
document.getElementById("notificationContainer");

if (!container) return;

container.innerHTML = "";

let notifications = [];

if (courses.length === 0) {

const students =
JSON.parse(localStorage.getItem("students")) || [];

notifications.push(`${courses.length} Courses Available`);
notifications.push(`${students.length} Students Registered`);
notifications.push(`${enrollments.length} Enrollments Found`);
}

if (enrollments.length === 0) {

notifications.push(
"No students have enrolled yet."
);

}

if (notifications.length === 0) {

notifications.push(
"Dashboard is running normally."
);

notifications.push(
`${courses.length} courses are available.`
);

notifications.push(
`${enrollments.length} student enrollments found.`
);

}

notifications.forEach((note) => {

container.innerHTML += `

<div class="notification-item">

${note}

</div>

`;

});

}

// ===============================
// COURSE SEARCH (OPTIONAL)
// ===============================

function searchCourse(keyword) {

return courses.filter(course =>

course.title
.toLowerCase()
.includes(keyword.toLowerCase())

);

}

// ===============================
// REFRESH DASHBOARD
// ===============================

function refreshDashboard(){

loadStatistics();

loadCourses();

loadEnrollments();

loadNotifications();

}
// ===============================
// DASHBOARD OVERVIEW
// ===============================

function loadDashboardOverview() {

    const totalCourses = courses.length;
    const totalEnrollments = enrollments.length;
    const completedCourses = enrollments.filter(
        course => course.completed
    ).length;

    console.log("========== ADMIN DASHBOARD ==========");
    console.log("Total Courses :", totalCourses);
    console.log("Total Enrollments :", totalEnrollments);
    console.log("Completed Courses :", completedCourses);

}

// ===============================
// SAVE COURSES
// ===============================

function saveCourses() {

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

}

// ===============================
// SAVE ENROLLMENTS
// ===============================

function saveEnrollments() {

    localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(enrollments)
    );

}

// ===============================
// RESET DASHBOARD (OPTIONAL)
// ===============================

function resetDashboard() {

    if (confirm("Reset dashboard data?")) {

        localStorage.removeItem("courses");
        localStorage.removeItem("enrolledCourses");

        location.reload();

    }

}

// ===============================
// INITIALIZE DASHBOARD
// ===============================

function initializeDashboard() {

    loadStatistics();

    loadCourses();

    loadEnrollments();

    loadNotifications();

    loadDashboardOverview();

}

// ===============================
// WINDOW LOAD
// ===============================

window.onload = function () {

    initializeDashboard();

};

// ===============================
// AUTO REFRESH (Every 30 Seconds)
// ===============================

setInterval(() => {

    courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    enrollments =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    initializeDashboard();

}, 30000);
function logout() {

    localStorage.removeItem("loggedInAdmin");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);