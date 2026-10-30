// ===============================
// GET ALL INPUT ELEMENTS
// ===============================

const courseName = document.getElementById("courseName");
const courseCode = document.getElementById("courseCode");
const instructor = document.getElementById("instructor");
const duration = document.getElementById("duration");
const level = document.getElementById("level");
const category = document.getElementById("category");
const image = document.getElementById("image");
const status = document.getElementById("status");
const overview = document.getElementById("overview");

// ===============================
// LEARNING OUTCOMES
// ===============================

const outcome = document.getElementById("outcome");
const outcome2 = document.getElementById("outcome2");
const outcome3 = document.getElementById("outcome3");
const outcome4 = document.getElementById("outcome4");
const outcome5 = document.getElementById("outcome5");

// ===============================
// PREREQUISITES
// ===============================

// (Using your current HTML ID)

const prerequistite1 = document.getElementById("prerequistite1");
const prerequisite2 = document.getElementById("prerequisite2");
const prerequisite3 = document.getElementById("prerequisite3");

// ===============================
// COURSE MODULES
// ===============================

const module1 = document.getElementById("module1");
const module2 = document.getElementById("module2");
const module3 = document.getElementById("module3");
const module4 = document.getElementById("module4");
const module5 = document.getElementById("module5");

// ===============================
// VIDEO LESSONS
// ===============================

const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
const v4 = document.getElementById("v4");
const v5 = document.getElementById("v5");

// ===============================
// COURSE MATERIALS
// ===============================

const l1 = document.getElementById("l1");
const lab = document.getElementById("lab");

const reference = document.getElementById("reference");
const additional = document.getElementById("additional");

// ===============================
// COURSE SETTINGS
// ===============================

const maxstudents = document.getElementById("maxstudents");
const courselanguage = document.getElementById("courselanguage");
const certificateavailability = document.getElementById("certificateavailability");
const enrollmenttype = document.getElementById("enrollmenttype");
const sd = document.getElementById("sd");
const ed = document.getElementById("ed");

// ===============================
// BUTTONS
// ===============================

const publishBtn = document.getElementById("publishBtn");
const draftBtn = document.getElementById("draftBtn");

// ===============================
// IMAGE PREVIEW
// ===============================

image.addEventListener("input", function () {

    if (image.value.trim() !== "") {

        document.getElementById("previewImage").src =
            image.value;

    } else {

        document.getElementById("previewImage").src =
            "https://picsum.photos/900/350";

    }

});
// ===============================
// PUBLISH COURSE
// ===============================

publishBtn.addEventListener("click", function () {

    // Required Field Validation

    if (
        courseName.value.trim() === "" ||
        courseCode.value.trim() === "" ||
        instructor.value.trim() === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }

    // Create Course Object

    const course = {

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
            outcome.value.trim(),
            outcome2.value.trim(),
            outcome3.value.trim(),
            outcome4.value.trim(),
            outcome5.value.trim()
        ],

        prerequisites: [
            prerequistite1.value.trim(),
            prerequisite2.value.trim(),
            prerequisite3.value.trim()
        ],

        syllabus: [
            module1.value.trim(),
            module2.value.trim(),
            module3.value.trim(),
            module4.value.trim(),
            module5.value.trim()
        ],

        videos: [
            v1.value.trim(),
            v2.value.trim(),
            v3.value.trim(),
            v4.value.trim(),
            v5.value.trim()
        ],

        materials: [
            l1.value.trim(),
            lab.value.trim(),
            
            reference.value.trim(),
            additional.value.trim()
        ],

        maxStudents: maxstudents.value,
        language: courselanguage.value,
        certificate: certificateavailability.value,
        enrollmentType: enrollmenttype.value,

        startDate: sd.value,
        endDate: ed.value,

        completed: false

    };

    // Get Existing Courses

    let courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    // Add New Course

    courses.push(course);

    // Save to Local Storage

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    alert("Course Published Successfully!");

    // Redirect

    window.location.href = "admin_dashboard.html";

});
// ===============================
// SAVE DRAFT
// ===============================

draftBtn.addEventListener("click", function () {

    const draftCourse = {

        title: courseName.value.trim(),
        code: courseCode.value.trim(),
        instructor: instructor.value.trim(),
        duration: duration.value.trim(),
        level: level.value,
        category: category.value,
        image: image.value.trim(),
        status: "Draft",
        overview: overview.value.trim(),

        outcomes: [
            outcome.value.trim(),
            outcome2.value.trim(),
            outcome3.value.trim(),
            outcome4.value.trim(),
            outcome5.value.trim()
        ],

        prerequisites: [
            prerequistite1.value.trim(),
            prerequisite2.value.trim(),
            prerequisite3.value.trim()
        ],

        syllabus: [
            module1.value.trim(),
            module2.value.trim(),
            module3.value.trim(),
            module4.value.trim(),
            module5.value.trim()
        ],

        videos: [
            v1.value.trim(),
            v2.value.trim(),
            v3.value.trim(),
            v4.value.trim(),
            v5.value.trim()
        ],

        materials: [
            l1.value.trim(),
            lab.value.trim(),
            
            reference.value.trim(),
            additional.value.trim()
        ],

        maxStudents: maxstudents.value,
        language: courselanguage.value,
        certificate: certificateavailability.value,
        enrollmentType: enrollmenttype.value,

        startDate: sd.value,
        endDate: ed.value,

        completed: false

    };

    let drafts =
        JSON.parse(localStorage.getItem("draftCourses")) || [];

    drafts.push(draftCourse);

    localStorage.setItem(
        "draftCourses",
        JSON.stringify(drafts)
    );

    alert("Course Saved as Draft!");

});

// ===============================
// RESET FORM
// ===============================

// ===============================
// RESET FORM
// ===============================

document.getElementById("resetBtn").addEventListener("click", function () {
    // reset code


    courseName.value = "";
    courseCode.value = "";
    instructor.value = "";
    duration.value = "";

    level.selectedIndex = 0;
    category.selectedIndex = 0;
    status.selectedIndex = 0;

    image.value = "";
    overview.value = "";

    outcome.value = "";
    outcome2.value = "";
    outcome3.value = "";
    outcome4.value = "";
    outcome5.value = "";

    prerequistite1.value = "";
    prerequisite2.value = "";
    prerequisite3.value = "";

    module1.value = "";
    module2.value = "";
    module3.value = "";
    module4.value = "";
    module5.value = "";

    v1.value = "";
    v2.value = "";
    v3.value = "";
    v4.value = "";
    v5.value = "";

    l1.value = "";
    lab.value = "";
   
    reference.value = "";
    additional.value = "";

    maxstudents.value = "";

    courselanguage.selectedIndex = 0;
    certificateavailability.selectedIndex = 0;
    enrollmenttype.selectedIndex = 0;

    sd.value = "";
    ed.value = "";

    document.getElementById("previewImage").src =
        "https://picsum.photos/900/350";

});

// ===============================
// PAGE LOAD
// ===============================

window.onload = function () {

    document.getElementById("previewImage").src =
    "https://picsum.photos/900/350";

};
function logout() {

    localStorage.removeItem("loggedInAdmin");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);