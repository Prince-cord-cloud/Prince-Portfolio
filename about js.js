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
// // Scroll animation effect
// const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//             }
//         });
//     },
//     { threshold: 0.2 }
// );

document.querySelectorAll(".fade-in, .slide-up").forEach((el) => observer.observe(el));
