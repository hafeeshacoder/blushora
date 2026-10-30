// =========================================
// DOM ELEMENTS
// =========================================

const enrollmentTable = document.getElementById("enrollmentTable");

const searchEnrollment =
document.getElementById("searchEnrollment");

const statusFilter =
document.getElementById("statusFilter");

const selectedEnrollment =
document.getElementById("selectedEnrollment");

const approvedTable =
document.getElementById("approvedTable");

const activityContainer =
document.getElementById("activityContainer");

const totalRequests =
document.getElementById("totalRequests");

const approvedRequests =
document.getElementById("approvedRequests");

const pendingRequests =
document.getElementById("pendingRequests");

const rejectedRequests =
document.getElementById("rejectedRequests");

const summaryTotal =
document.getElementById("summaryTotal");

const summaryApproved =
document.getElementById("summaryApproved");

const summaryPending =
document.getElementById("summaryPending");

const summaryRejected =
document.getElementById("summaryRejected");

// =========================================
// LOAD ENROLLMENTS
// =========================================

let enrollments =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

let selectedIndex = -1;

// =========================================
// DISPLAY ENROLLMENTS
// =========================================

function displayEnrollments(data = enrollments) {

    enrollmentTable.innerHTML = "";

    if (data.length === 0) {

        enrollmentTable.innerHTML = `

        <tr>

            <td
                colspan="5"
                style="
                    padding:60px;
                    text-align:center;
                    color:var(--text-muted);
                "
            >

                No Enrollment Requests Found

            </td>

        </tr>

        `;

        updateStatistics();

        return;

    }


    data.forEach(function(enrollment){

        const originalIndex =
            enrollments.indexOf(enrollment);

        enrollmentTable.innerHTML += `

        <tr>

            <td>
                ${enrollment.student || "Student"}
            </td>

            <td>
                ${enrollment.title || enrollment.course || "Course"}
            </td>

            <td>
                ${enrollment.enrollDate || "-"}
            </td>

            <td>
                ${enrollment.status || "Pending"}
            </td>

            <td>

                <button
                    onclick="viewEnrollment(${originalIndex})"
                >
                    View
                </button>

            </td>

        </tr>

        `;

    });

    updateStatistics();

}
// =========================================
// VIEW ENROLLMENT
// =========================================

function viewEnrollment(index){

    selectedIndex = index;

    let enrollment = enrollments[index];

    selectedEnrollment.innerHTML = `

    <h3 style="color:var(--primary-deep);margin-bottom:20px;">

    Enrollment Details

    </h3>

    <p><strong>Student Name :</strong> ${enrollment.student}</p>

    <p><strong>Course Name :</strong> ${enrollment.title}</p>

    <p><strong>Enrollment Date :</strong> ${enrollment.enrollDate}</p>

   

    <div
    style="
    margin-top:25px;
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;">

    <button
    onclick="approveEnrollment()"
    style="
    padding:12px 25px;
    background:var(--success);
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;">

    Approve

    </button>

    <button
    onclick="rejectEnrollment()"
    style="
    padding:12px 25px;
    background:var(--danger);
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;">

    Reject

    </button>

    </div>

    `;

}

// =========================================
// SEARCH ENROLLMENT
// =========================================

searchEnrollment.addEventListener("keyup", function(){

    let keyword = this.value.toLowerCase();

    let filtered = enrollments.filter(function(item){

        return (

            item.student.toLowerCase().includes(keyword)

            ||

            item.title.toLowerCase().includes(keyword)

        );

    });

    displayEnrollments(filtered);

});

// =========================================
// FILTER BY STATUS
// =========================================

statusFilter.addEventListener("change", function(){

    let value = this.value;

    if(value === "All"){

        displayEnrollments();

        return;

    }

    let filtered = enrollments.filter(function(item){

        return item.status === value;

    });

    displayEnrollments(filtered);

});
// =========================================
// APPROVE ENROLLMENT
// =========================================

function approveEnrollment() {

    if (selectedIndex === -1) {

        alert("Please select an enrollment request.");

        return;

    }

    enrollments[selectedIndex].status = "Approved";

    localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(enrollments)
    );

    // Let the student know their enrollment was approved, and let
    // them keep their place in the course (unchanged).
    notifyStudent(
        enrollments[selectedIndex],
        "approved",
        "Your enrollment in \"" + enrollments[selectedIndex].title + "\" has been approved. You can continue learning."
    );

    alert("Enrollment Approved Successfully!");

    displayEnrollments();

    viewEnrollment(selectedIndex);

    updateStatistics();

    loadApprovedEnrollments();

    loadRecentActivity();

}

// =========================================
// REJECT ENROLLMENT
// =========================================

function rejectEnrollment() {

    if (selectedIndex === -1) {

        alert("Please select an enrollment request.");

        return;

    }

    enrollments[selectedIndex].status = "Rejected";

    localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(enrollments)
    );

    // Let the student know their enrollment was rejected, and
    // remove the course from their personal course list so "My
    // Courses" no longer shows it.
    notifyStudent(
        enrollments[selectedIndex],
        "rejected",
        "Your enrollment request for \"" + enrollments[selectedIndex].title + "\" was rejected. Please try another course."
    );
    unenrollStudent(enrollments[selectedIndex]);

    alert("Enrollment Rejected Successfully!");

    displayEnrollments();

    viewEnrollment(selectedIndex);

    updateStatistics();

    loadApprovedEnrollments();

    loadRecentActivity();

}

// =========================================
// UPDATE STATISTICS
// =========================================

function updateStatistics() {

    let total = enrollments.length;

    let approved = enrollments.filter(function(item){

        return item.status === "Approved";

    }).length;

    let pending = enrollments.filter(function(item){

        return item.status === "Pending";

    }).length;

    let rejected = enrollments.filter(function(item){

        return item.status === "Rejected";

    }).length;

    totalRequests.textContent = total;
    approvedRequests.textContent = approved;
    pendingRequests.textContent = pending;
    rejectedRequests.textContent = rejected;

    summaryTotal.textContent = total;
    summaryApproved.textContent = approved;
    summaryPending.textContent = pending;
    summaryRejected.textContent = rejected;

}
// =========================================
// LOAD APPROVED ENROLLMENTS
// =========================================

function loadApprovedEnrollments() {

    approvedTable.innerHTML = "";

    let approved = enrollments.filter(function(item){

        return item.status === "Approved";

    });

    if (approved.length === 0) {

        approvedTable.innerHTML = `

        <tr>

            <td colspan="4"
            style="
            padding:60px;
            text-align:center;
            color:var(--text-muted);">

            No Approved Enrollments

            </td>

        </tr>

        `;

        return;

    }

    approved.forEach(function(item){

        approvedTable.innerHTML += `

        <tr>

            <td>${item.student}</td>

            <td>${item.title || item.course || "Course"}</td>

            <td>Administrator</td>

            <td>${item.enrollDate}</td>

        </tr>

        `;

    });

}

// =========================================
// LOAD RECENT ACTIVITY
// =========================================

function loadRecentActivity() {

    if (enrollments.length === 0) {

        activityContainer.innerHTML = `

        <h3 style="color:var(--primary-deep);">

        No Recent Activity

        </h3>

        <p>

        Recent enrollment activities will appear here.

        </p>

        `;

        return;

    }

    let html = "<h3 style='color:var(--primary-deep);margin-bottom:20px;'>Recent Activity</h3>";

    enrollments
    .slice(-5)
    .reverse()
    .forEach(function(item){

        html += `

        <p style="margin-bottom:15px;">

        <strong>${item.student}</strong>

        applied for

        <strong>${item.title}</strong>

        -

        
        </p>

        `;

    });

    activityContainer.innerHTML = html;

}

// =========================================
// REFRESH ENROLLMENTS
// =========================================

function refreshEnrollments() {

    enrollments =

    JSON.parse(

    localStorage.getItem("enrolledCourses")

    ) || [];

    displayEnrollments();

    updateStatistics();

    loadApprovedEnrollments();

    loadRecentActivity();

}

// =========================================
// PAGE LOAD
// =========================================

// =========================================
// PAGE LOAD
// =========================================

function initializeManageEnrollment() {

    refreshEnrollments();

}


// Run immediately because React has already
// rendered the page before this script loads.

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeManageEnrollment
    );

} else {

    initializeManageEnrollment();

}

// =========================================
// AUTO REFRESH
// =========================================

setInterval(function(){

    refreshEnrollments();

},30000);
function logout() {

    localStorage.removeItem("loggedInAdmin");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);

// =========================================
// NOTIFY STUDENT OF AN ENROLLMENT DECISION
// (additive: does not change any existing
// enrollment/admin data, only informs the
// student and, for rejections, removes the
// course from their personal course list)
// =========================================

function notifyStudent(record, type, message) {

    if (!record || !record.studentEmail) return;

    var key = record.studentEmail + "_notifications";

    var notifications =
        JSON.parse(localStorage.getItem(key)) || [];

    notifications.unshift({
        type: type,
        course: record.title,
        message: message,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem(key, JSON.stringify(notifications));
}

function unenrollStudent(record) {

    if (!record || !record.studentEmail) return;

    var key = record.studentEmail + "_enrolledCourses";

    var studentCourses =
        JSON.parse(localStorage.getItem(key)) || [];

    var updated = studentCourses.filter(function (c) {
        return c.title !== record.title;
    });

    localStorage.setItem(key, JSON.stringify(updated));
}
