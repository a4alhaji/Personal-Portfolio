// Hide loader when page finishes loading
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');

    if (loaderWrapper) {
        // Optional: Add a fade-out animation before hiding
        loaderWrapper.style.transition = 'opacity 0.6s ease-out';
        loaderWrapper.style.opacity = '0';

        // Remove loader from DOM after fade-out
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 10000); // Adjust timeout as needed
    }
});

// Optional: Also hide loader on DOMContentLoaded as a fallback
document.addEventListener('DOMContentLoaded', function() {
    // Page is ready, loader will fade out on window load
});

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.getElementById('navBar');

    if (menuToggle && navBar) {
        menuToggle.addEventListener('click', function() {
            navBar.classList.toggle('active');

            // Change icon between bars and times (X)
            const icon = menuToggle.querySelector('i');
            if (navBar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navBar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navBar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navBar.contains(event.target) && !menuToggle.contains(event.target)) {
                navBar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');

    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            window.location.href = '/root/pages/contact.html';
        });
    }
});
