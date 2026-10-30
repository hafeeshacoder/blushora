const student = JSON.parse(localStorage.getItem("loggedInStudent"));

const loginLink = document.getElementById("loginLink");
const logoutBtn = document.getElementById("logoutBtn");

if (student) {
    loginLink.style.display = "none";
    logoutBtn.style.display = "inline-block";
} else {
    loginLink.style.display = "inline-block";
    logoutBtn.style.display = "none";
}

logoutBtn.addEventListener("click", function () {
    
    window.location.reload();
});