

//================ COURSE NAMES =================//

let enrolledCourses =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

if(enrolledCourses.length>0){

    const latestCourse =
    enrolledCourses[enrolledCourses.length-1];

    document.getElementById("courseName").textContent =
    latestCourse.title;

}
else{

    document.getElementById("courseName").textContent =
    "Selected Course";

}


//================ DISPLAY COURSE NAME =================//

document.getElementById("courseName").textContent =
courseNames[course] || "Selected Course";


//================ TODAY'S DATE =================//

const today = new Date();

const options = {

day:"numeric",

month:"long",

year:"numeric"

};

document.getElementById("enrollDate").textContent =
today.toLocaleDateString("en-US", options);


//================ SAVE ENROLLMENT =================//

//================ SAVE ENROLLMENT =================//



//================ MY COURSES BUTTON =================//

function goToMyCourses(){

window.location.href = "my_courses.html";

}
function logout() {

    localStorage.removeItem("loggedInStudent");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);