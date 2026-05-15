// JavaScript for Portfolio Website
// Set active nav link based on current page

document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to the link that matches the current page
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        // Special case for index.html (home page) when currentPage is empty or just '/'
        if (currentPage === '' || currentPage === 'index.html') {
            if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        }
    });
});