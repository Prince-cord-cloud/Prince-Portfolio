const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
navLinks.classList.toggle("open");
if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
} else {
    navLinks.style.display = "flex";
}
});
