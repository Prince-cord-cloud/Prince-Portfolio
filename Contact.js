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

// Prince Tech WhatsApp number
const PHONE_NUMBER = "https://wa.me/2347069943790";

function openWhatsAppQuick() {
    const message = encodeURIComponent("Hello Prince Tech! I'm interested in your graphic design or frontend services.");
    window.open(`https://wa.me/${2347069943790}?text=${message}`, "_blank");
}

function prefillService(service) {
    const select = document.getElementById("bf-service");
    select.value = service;
    document.getElementById("book").scrollIntoView({ behavior: "smooth" });
}

function submitBooking(e) {
    e.preventDefault();
    const name = document.getElementById("bf-name").value;
    const phone = document.getElementById("bf-phone").value;
    const service = document.getElementById("bf-service").value;
    const date = document.getElementById("bf-date").value;
    const time = document.getElementById("bf-time").value;
    const notes = document.getElementById("bf-notes").value;

    const msg = encodeURIComponent(
        `Hello Prince Tech! I'd like to book a service.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nNotes: ${notes}`
    );

    window.open(`https://wa.me/${2347069943790}?text=${msg}`, "_blank");
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.getElementById("year").textContent = new Date().getFullYear();