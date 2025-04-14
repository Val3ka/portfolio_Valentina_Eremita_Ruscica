function toggleMobileMenu(button) {
    const mobileMenu = document.querySelector(".mobile-menu");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

  
    button.classList.toggle("open");
    mobileMenu.classList.toggle("open");


    button.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.setAttribute("aria-hidden", isExpanded ? "true" : "false");
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburgerButton = document.getElementById('hamburger-icon');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (hamburgerButton.classList.contains('open')) {
            hamburgerButton.classList.remove('open');
            mobileMenu.classList.remove('open');
            hamburgerButton.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute("aria-hidden", "true");
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    if (!window.location.hash) {
        window.location.hash = "#home"; 
    }
});


(function() {
    emailjs.init("2vHQrjNc5nh_J9_hq"); 
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_nxbt5w8', 'template_8h5ea5n', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });

    if (window.location.hash === '') {
        window.location.hash = '#home';  
    }
};