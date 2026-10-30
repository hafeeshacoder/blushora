// ===============================
// DOM ELEMENTS
// ===============================

const courseList = document.getElementById("courseList");
const searchCourse = document.getElementById("searchCourse");

const courseName = document.getElementById("courseName");
const courseCode = document.getElementById("courseCode");
const instructor = document.getElementById("instructor");
const duration = document.getElementById("duration");
const level = document.getElementById("level");
const category = document.getElementById("category");
const image = document.getElementById("image");
const status = document.getElementById("status");
const overview = document.getElementById("overview");

const outcome1 = document.getElementById("outcome1");
const outcome2 = document.getElementById("outcome2");
const outcome3 = document.getElementById("outcome3");
const outcome4 = document.getElementById("outcome4");
const outcome5 = document.getElementById("outcome5");

const pre1 = document.getElementById("pre1");
const pre2 = document.getElementById("pre2");
const pre3 = document.getElementById("pre3");

const module1 = document.getElementById("module1");
const module2 = document.getElementById("module2");
const module3 = document.getElementById("module3");
const module4 = document.getElementById("module4");
const module5 = document.getElementById("module5");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const video5 = document.getElementById("video5");

const notes = document.getElementById("notes");
const lab = document.getElementById("lab");
const assignment = document.getElementById("assignment");
const reference = document.getElementById("reference");
const resource = document.getElementById("resource");

const previewImage = document.getElementById("previewImage");

const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const resetBtn = document.getElementById("resetBtn");

// ===============================
// LOCAL STORAGE
// ===============================

let courses =
JSON.parse(localStorage.getItem("courses")) || [];

let selectedCourseIndex = -1;

// ===============================
// DISPLAY ALL COURSES
// ===============================

function displayCourses(list = courses) {

    courseList.innerHTML = "";

    if(list.length === 0){

        courseList.innerHTML =

        `
        <p style="
        text-align:center;
        color:var(--text-muted);
        padding:30px;">

        No Courses Available

        </p>
        `;

        return;
    }

    list.forEach((course,index)=>{

        courseList.innerHTML +=

        `
        <div class="course-card">

            <div class="course-info">

                <h3>${course.title}</h3>

                <p>

                Instructor :
                ${course.instructor}

                |

                Duration :
                ${course.duration}

                |

                Status :
                ${course.status}

                </p>

            </div>

            <button
            class="edit-btn"
            onclick="loadCourse(${index})">

            Edit Course

            </button>

        </div>
        `;

    });

}
// ===============================
// LOAD SELECTED COURSE
// ===============================

function loadCourse(index){

    selectedCourseIndex = index;

    let course = courses[index];

    courseName.value = course.title || "";
    courseCode.value = course.code || "";
    instructor.value = course.instructor || "";
    duration.value = course.duration || "";
    level.value = course.level || "Beginner";
    category.value = course.category || "Programming";
    image.value = course.image || "";
    status.value = course.status || "Active";
    overview.value = course.overview || "";

    outcome1.value = course.outcomes?.[0] || "";
    outcome2.value = course.outcomes?.[1] || "";
    outcome3.value = course.outcomes?.[2] || "";
    outcome4.value = course.outcomes?.[3] || "";
    outcome5.value = course.outcomes?.[4] || "";

    pre1.value = course.prerequisites?.[0] || "";
    pre2.value = course.prerequisites?.[1] || "";
    pre3.value = course.prerequisites?.[2] || "";

    module1.value = course.syllabus?.[0] || "";
    module2.value = course.syllabus?.[1] || "";
    module3.value = course.syllabus?.[2] || "";
    module4.value = course.syllabus?.[3] || "";
    module5.value = course.syllabus?.[4] || "";

    video1.value = course.videos?.[0] || "";
    video2.value = course.videos?.[1] || "";
    video3.value = course.videos?.[2] || "";
    video4.value = course.videos?.[3] || "";
    video5.value = course.videos?.[4] || "";

    notes.value = course.materials?.[0] || "";
    lab.value = course.materials?.[1] || "";
    assignment.value = course.materials?.[2] || "";
    reference.value = course.materials?.[3] || "";
    resource.value = course.materials?.[4] || "";

    if(course.image && course.image.trim() !== ""){

        previewImage.src = course.image;

    }
    else{

        previewImage.src = "https://picsum.photos/900/350";

    }

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

// ===============================
// SEARCH COURSE
// ===============================

searchCourse.addEventListener("keyup", function(){

    let keyword = this.value.toLowerCase();

    let filteredCourses = courses.filter(function(course){

        return course.title.toLowerCase().includes(keyword);

    });

    displayCourses(filteredCourses);

});

// ===============================
// LIVE IMAGE PREVIEW
// ===============================

image.addEventListener("input", function(){

    if(image.value.trim() !== ""){

        previewImage.src = image.value;

    }
    else{

        previewImage.src = "https://picsum.photos/900/350";

    }

});

// ===============================
// INITIAL LOAD
// ===============================

displayCourses();
// ===============================
// UPDATE COURSE
// ===============================

updateBtn.addEventListener("click", function () {

    if (selectedCourseIndex === -1) {

        alert("Please select a course to update.");

        return;

    }

    courses[selectedCourseIndex] = {

        key: courses[selectedCourseIndex].key,

        title: courseName.value.trim(),
        code: courseCode.value.trim(),
        instructor: instructor.value.trim(),
        duration: duration.value.trim(),
        level: level.value,
        category: category.value,
        image: image.value.trim(),
        status: status.value,
        overview: overview.value.trim(),

        outcomes: [

            outcome1.value.trim(),
            outcome2.value.trim(),
            outcome3.value.trim(),
            outcome4.value.trim(),
            outcome5.value.trim()

        ],

        prerequisites: [

            pre1.value.trim(),
            pre2.value.trim(),
            pre3.value.trim()

        ],

        syllabus: [

            module1.value.trim(),
            module2.value.trim(),
            module3.value.trim(),
            module4.value.trim(),
            module5.value.trim()

        ],

        videos: [

            video1.value.trim(),
            video2.value.trim(),
            video3.value.trim(),
            video4.value.trim(),
            video5.value.trim()

        ],

        materials: [

            notes.value.trim(),
            lab.value.trim(),
            assignment.value.trim(),
            reference.value.trim(),
            resource.value.trim()

        ],

        completed: courses[selectedCourseIndex].completed || false

    };

    localStorage.setItem(

        "courses",
        JSON.stringify(courses)

    );

    alert("Course Updated Successfully!");

    displayCourses();

});

// ===============================
// DELETE COURSE
// ===============================

deleteBtn.addEventListener("click", function () {

    if (selectedCourseIndex === -1) {

        alert("Please select a course to delete.");

        return;

    }

    let confirmDelete = confirm(

        "Are you sure you want to delete this course?"

    );

    if (!confirmDelete) {

        return;

    }

    courses.splice(selectedCourseIndex, 1);

    localStorage.setItem(

        "courses",
        JSON.stringify(courses)

    );

    alert("Course Deleted Successfully!");

    selectedCourseIndex = -1;

    displayCourses();

});
// ===============================
// RESET FORM
// ===============================

resetBtn.addEventListener("click", function () {

    courseName.value = "";
    courseCode.value = "";
    instructor.value = "";
    duration.value = "";

    level.selectedIndex = 0;
    category.selectedIndex = 0;
    status.selectedIndex = 0;

    image.value = "";
    overview.value = "";

    outcome1.value = "";
    outcome2.value = "";
    outcome3.value = "";
    outcome4.value = "";
    outcome5.value = "";

    pre1.value = "";
    pre2.value = "";
    pre3.value = "";

    module1.value = "";
    module2.value = "";
    module3.value = "";
    module4.value = "";
    module5.value = "";

    video1.value = "";
    video2.value = "";
    video3.value = "";
    video4.value = "";
    video5.value = "";

    notes.value = "";
    lab.value = "";
    assignment.value = "";
    reference.value = "";
    resource.value = "";

    previewImage.src = "https://picsum.photos/900/350";

    selectedCourseIndex = -1;

});

// ===============================
// REFRESH COURSE LIST
// ===============================

function refreshCourses() {

    courses = JSON.parse(localStorage.getItem("courses")) || [];

    displayCourses();

}

// ===============================
// PAGE INITIALIZATION
// ===============================

window.onload = function () {

    refreshCourses();

    previewImage.src = "https://picsum.photos/900/350";

};

// ===============================
// AUTO REFRESH (OPTIONAL)
// ===============================

setInterval(function () {

    refreshCourses();

}, 30000);
function logout() {

    localStorage.removeItem("loggedInAdmin");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);