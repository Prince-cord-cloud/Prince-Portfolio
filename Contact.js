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
window.addEventListener("load", () => {
    document.body.classList.add("loader")
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 1500);
});

const form = document.getElementById('booking-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const services = document.getElementById('services').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const projectDetails = document.getElementById('project-details').value;

    const message = `Name: ${fullName}%0A Phone Number: ${phoneNumber}%0A Services: ${services}%0A Date: ${date}%0A Time: ${time}%0A Project Details: ${projectDetails}`;
    const whatsappUrl = `https://wa.me/+2347069943790?text=${message}`;

    window.open(whatsappUrl, 'https://wa.me/+2347069943790');
});