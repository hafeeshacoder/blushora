//=====================================================
// GET ENROLLED COURSES
//=====================================================
const student =
JSON.parse(localStorage.getItem("loggedInStudent"));
//=====================================================
// DISPLAY STUDENT DETAILS
//=====================================================

if(student){

   

    document.getElementById("studentEmail").innerHTML =
    student.email || "-";

    



    document.getElementById("studentDepartment").innerHTML =
    student.department || "-";

}

const studentKey = student.email;
const enrolledCourses =
JSON.parse(
localStorage.getItem(studentKey+"_enrolledCourses")
) || [];

const courseTable =
document.getElementById("courseTable");

const notificationContainer =
document.getElementById("notificationContainer");

const quickOverview =
document.getElementById("quickOverview");


//=====================================================
// UPDATE DASHBOARD STATISTICS
//=====================================================

let totalProgress = 0;
let completedCourses = 0;

enrolledCourses.forEach(course => {

    const progress = Number(
        localStorage.getItem(
studentKey+"_"+course.title+"_progress"
)
    );

    totalProgress += progress;

    if(progress === 100){
        completedCourses++;
    }

});

const overall =
enrolledCourses.length > 0
? Math.round(totalProgress / enrolledCourses.length)
: 0;

document.getElementById("enrolledCount").innerHTML =
enrolledCourses.length;

document.getElementById("completedCount").innerHTML =
completedCourses;

document.getElementById("assignmentCount").innerHTML = "0";

document.getElementById("overallProgress").innerHTML =
overall + "%";


//=====================================================
// DISPLAY MY COURSES
//=====================================================

if(enrolledCourses.length === 0){

    courseTable.innerHTML = `

    <tr>

        <td colspan="3"
        style="
        text-align:center;
        padding:40px;
        color:gray;
        ">

        No courses enrolled yet.

        </td>

    </tr>

    `;

}
else{

    let html = "";

    enrolledCourses.forEach(course => {

        const progress = Number(
            localStorage.getItem(studentKey+"_"+course.title + "_progress") || 0
        );

        const status =
        progress === 100
        ? "Completed"
        : progress > 0
        ? "In Progress"
        : "Enrolled";

        html += `

        <tr>

            <td>${course.title}</td>

            <td>${status}</td>

            <td>

                ${progress}%

                <div
                style="
                width:120px;
                height:8px;
                background:var(--border-soft);
                border-radius:20px;
                margin-top:6px;
                ">

                    <div
                    style="
                    width:${progress}%;
                    height:100%;
                    background:var(--primary);
                    border-radius:20px;
                    ">
                    </div>

                </div>

            </td>

        </tr>

        `;

    });

    courseTable.innerHTML = html;

}


//=====================================================
// RECENT NOTIFICATIONS
//=====================================================

if(enrolledCourses.length === 0){

    notificationContainer.innerHTML = `

    <p
    style="
    text-align:center;
    padding:30px;
    color:gray;
    ">

    No notifications available.

    </p>

    `;

}
else{

    notificationContainer.innerHTML = `

    <div
    style="
    padding:20px;
    background:var(--surface-alt);
    border-left:5px solid var(--primary);
    border-radius:8px;
    margin-bottom:15px;
    ">

    You have successfully enrolled in
    <b>${enrolledCourses.length}</b>
    course(s).

    </div>

    <div
    style="
    padding:20px;
    background:var(--surface-alt);
    border-left:5px solid var(--success);
    border-radius:8px;
    ">

    You have completed
    <b>${completedCourses}</b>
    course(s).

    <br><br>

    Overall Learning Progress :
    <b>${overall}%</b>

    </div>

    `;

}


//=====================================================
// QUICK OVERVIEW
//=====================================================

quickOverview.innerHTML = `

<p>

<b>Total Courses :</b>
${enrolledCourses.length}

</p>

<br>

<p>

<b>Completed :</b>
${completedCourses}

</p>

<br>

<p>

<b>Assignments :</b>
0

</p>

<br>

<p>

<b>Overall Progress :</b>
${overall}%

</p>

<div
style="
width:100%;
height:12px;
background:var(--border-soft);
border-radius:20px;
margin-top:10px;
">

<div
style="
width:${overall}%;
height:100%;
background:var(--primary);
border-radius:20px;
">
</div>

</div>

`;
function logout() {

    localStorage.removeItem("loggedInStudent");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);