// ===============================
// Student Courses Script
// ===============================

// Search Courses
const searchInput = document.getElementById("searchCourse");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const title =
                card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ===============================
// Open Course Details
// ===============================

document.querySelectorAll(".viewCourseBtn").forEach(button => {

    button.addEventListener("click", function () {

        localStorage.setItem(
            "selectedCourseKey",
            this.dataset.course
        );

        window.location.href = "course_details.html";

    });

});


// ===============================
// Logout
// ===============================

function logout() {

    localStorage.removeItem("loggedInStudent");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", logout);

}

// ===============================
// Courses are now loaded from the mock API
// (see CourseContext.jsx), so the old localStorage
// sync with admin changes is no longer needed.
// ===============================
