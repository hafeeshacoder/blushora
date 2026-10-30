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
// SYNC WITH ADMIN CHANGES
// (updates edited courses, removes deleted ones,
//  adds newly published ones — no HTML changes needed)
// ===============================

const STATIC_COURSE_KEYS = [
    "python", "java", "web", "database", "machinelearning",
    "artificialintelligence", "cybersecurity", "cloudcomputing",
    "mobiledevelopment", "devops"
];

function syncCoursesWithAdmin() {

    const adminCourses =
        JSON.parse(localStorage.getItem("courses")) || [];

    // 1. Update or remove the existing hardcoded cards
    document.querySelectorAll(".viewCourseBtn").forEach(btn => {

        const key = btn.dataset.course;

        if (!STATIC_COURSE_KEYS.includes(key)) return;

        const match = adminCourses.find(c => c.key === key);
        const card = btn.closest(".card");

        if (!match) {
            // Admin deleted this course
            card.remove();
            return;
        }

        if (match.title) card.querySelector("h3").textContent = match.title;
        if (match.overview) card.querySelector("p").textContent = match.overview;
        if (match.image) card.querySelector("img").src = match.image;

    });

    // 2. Add any brand-new courses the admin published
    const container = document.getElementById("courseContainer");

    adminCourses.forEach(c => {

        if (c.key) return; // already handled above
        if (!c.title) return;

        const dataKey = "new:" + encodeURIComponent(c.title);

        if (document.querySelector(`.viewCourseBtn[data-course="${dataKey}"]`)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${c.image || 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'}" alt="${c.title}">
            <h3>${c.title}</h3>
            <p>${c.overview || ""}</p>
            <button class="btn viewCourseBtn" data-course="${dataKey}">View Details</button>
        `;

        container.appendChild(card);

        card.querySelector(".viewCourseBtn").addEventListener("click", function () {

            localStorage.setItem("selectedCourseKey", this.dataset.course);
            window.location.href = "course_details.html";

        });

    });

}

syncCoursesWithAdmin();