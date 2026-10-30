//=====================================================
// GET ENROLLED COURSES
//=====================================================
const student =
JSON.parse(localStorage.getItem("loggedInStudent"));

const studentKey = student.email;
const enrolledCourses =
JSON.parse(
localStorage.getItem(studentKey+"_enrolledCourses")
) || [];

const container =
document.getElementById("courseContainer");


//=====================================================
// NO COURSES
//=====================================================

if(enrolledCourses.length === 0){

    container.innerHTML = `

    <div class="empty">

        <h3>No Courses Enrolled Yet</h3>

        <p>
        Browse courses and enroll to start learning.
        </p>

        <a href="courses.html" class="browse">

            Browse Courses

        </a>

    </div>

    `;

    document.getElementById("totalCourses").innerHTML="0";
    document.getElementById("enrolledCount").innerHTML="0";
    document.getElementById("progressCount").innerHTML="0";
    document.getElementById("completedCount").innerHTML="0";
    document.getElementById("certificateCount").innerHTML="0";

    document.getElementById("overallProgress").style.width="0%";
    document.getElementById("overallProgressText").innerHTML="0% Completed";

}

else{

    let html="";

    let completedCourses=0;
    let inProgressCourses=0;
    let totalProgress=0;

    let totalVideos=0;
    let watchedVideosCount=0;

    enrolledCourses.forEach(course=>{

        const progress =
        Number(
        localStorage.getItem(
studentKey+"_"+course.title+"_progress"
)
        ) || 0;

        totalProgress += progress;

        const watchedVideos =
        JSON.parse(
        localStorage.getItem(
studentKey+"_"+course.title+"_videos"
)
        ) || [];

        const courseVideos =
        Number(
        localStorage.getItem(
studentKey+"_"+course.title+"_totalVideos"
)
        ) || 0;

        watchedVideosCount += watchedVideos.length;
        totalVideos += courseVideos;

        let status="Enrolled";

        if(progress>0 && progress<100){

            status="In Progress";
            inProgressCourses++;

        }

        if(progress===100){

            status="Completed";
            completedCourses++;

        }

        html += `

        <div class="course-card">

            <div class="course-header">

                <h3>${course.title}</h3>

                <div class="status">

                    ${status}

                </div>

            </div>

            <div class="course-info">

                <div class="info-box">

                    <h4>Status</h4>

                    <p>${status}</p>

                </div>

                <div class="info-box">

                    <h4>Progress</h4>

                    <p>${progress}%</p>

                </div>

                <div class="info-box">

                    <h4>Videos</h4>

                    <p>

                    ${watchedVideos.length}/${courseVideos}

                    Watched

                    </p>

                </div>

                <div class="info-box">

                    <h4>Materials</h4>

                    <p>Available</p>

                </div>

            </div>

            <div class="progress-title">

                Learning Progress

            </div>

            <div class="progress">

                <div
                class="progress-fill"
                style="width:${progress}%;">
                </div>

            </div>

            <div class="progress-text">

                ${progress}% Completed

            </div>

            <div class="buttons">

                <button
                class="btn start"
                onclick="startCourse('${course.title}')">

                ${progress===100
                ? "Review Course"
                : "Continue Learning"}

                </button>

                <button
                class="btn details"
                onclick="viewCourse('${course.title}')">

                View Details

                </button>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

    const overall =
    enrolledCourses.length>0
    ? Math.round(totalProgress/enrolledCourses.length)
    :0;

    document.getElementById("totalCourses").innerHTML =
    enrolledCourses.length;

    document.getElementById("enrolledCount").innerHTML =
    enrolledCourses.length;

    document.getElementById("progressCount").innerHTML =
    inProgressCourses;

    document.getElementById("completedCount").innerHTML =
    completedCourses;

    document.getElementById("certificateCount").innerHTML =
    completedCourses;

    document.getElementById("overallProgress").style.width =
    overall+"%";

    document.getElementById("overallProgressText").innerHTML =
    overall+"% Completed";

    document.getElementById("lessonCount").innerHTML =
    watchedVideosCount;

    document.getElementById("videoCount").innerHTML =
    totalVideos;

    document.getElementById("activityContainer").innerHTML = `

    <div class="course-card">

        <div class="course-header">

            <h3>Recent Activity</h3>

            <div class="status">

                Today

            </div>

        </div>

        <p
        style="
        font-size:17px;
        line-height:30px;
        color:var(--text-muted);">

        Enrolled Courses :
        <b>${enrolledCourses.length}</b>

        <br><br>

        Completed Courses :
        <b>${completedCourses}</b>

        <br><br>

        Videos Watched :
        <b>${watchedVideosCount}/${totalVideos}</b>

        <br><br>

        Overall Progress :
        <b>${overall}%</b>

        </p>

    </div>

    `;

}


//=====================================================
// VIEW COURSE
//=====================================================
function viewCourse(title){

    const enrolledCourses =
        JSON.parse(
            localStorage.getItem(
                studentKey + "_enrolledCourses"
            )
        ) || [];

    const selected =
        enrolledCourses.find(
            c => c.title === title
        );

    if(selected){

        localStorage.setItem(
            "selectedCourse",
            JSON.stringify(selected)
        );

        /*
         * Keep Course Details synchronized
         * with the selected enrolled course.
         */
        const courses =
            JSON.parse(
                localStorage.getItem("courses")
            ) || [];

        const matchingCourse =
            courses.find(
                c => c.title === selected.title
            );

        if(matchingCourse && matchingCourse.key){

            localStorage.setItem(
                "selectedCourseKey",
                matchingCourse.key
            );

        }

        window.location.href =
            "course_details.html";

    }

}

//=====================================================
// START COURSE
//=====================================================

function startCourse(title){

    const enrolledCourses =
        JSON.parse(
            localStorage.getItem(
                studentKey + "_enrolledCourses"
            )
        ) || [];

    const selected =
        enrolledCourses.find(
            c => c.title === title
        );

    if(selected){

        localStorage.setItem(
            "selectedCourse",
            JSON.stringify(selected)
        );

        const courses =
            JSON.parse(
                localStorage.getItem("courses")
            ) || [];

        const matchingCourse =
            courses.find(
                c => c.title === selected.title
            );

        if(matchingCourse && matchingCourse.key){

            localStorage.setItem(
                "selectedCourseKey",
                matchingCourse.key
            );

        }

        window.location.href =
            "start_course.html";

    }

}
function logout() {

    localStorage.removeItem("loggedInStudent");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);