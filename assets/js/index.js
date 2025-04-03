function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu) {
        mobileMenu.classList.toggle("open");
    }
}

const menuToggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("close-overlay");

if (menuToggle && overlay && closeOverlay) {
    menuToggle.addEventListener("click", () => overlay.classList.add("active"));
    closeOverlay.addEventListener("click", () => overlay.classList.remove("active"));
}



document.addEventListener("DOMContentLoaded", function() {
    if (!window.location.hash) {
        window.location.hash = "#home"; 
    }
});


(function() {
    emailjs.init({
        publicKey: "service_y6t18ag",
    });
})();

window.onload = function() {
    // Gestione del form di contatto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('portfolio_gmail', 'template_8h5ea5n', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });

    // Imposta hash se vuoto
    if (window.location.hash === '') {
        window.location.hash = '#home';  
    }
};