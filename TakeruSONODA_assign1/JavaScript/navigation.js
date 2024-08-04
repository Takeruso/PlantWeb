document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        if (link.href.includes(currentLocation)) {
            link.classList.add('active');
        }
    });
});
