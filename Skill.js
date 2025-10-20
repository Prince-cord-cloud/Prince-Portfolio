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

// Fade-in effect when scrolling
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

fadeElements.forEach(el => observer.observe(el));
window.addEventListener("load" , () => {
    document.body.classList.add("loader")
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 1500);
});