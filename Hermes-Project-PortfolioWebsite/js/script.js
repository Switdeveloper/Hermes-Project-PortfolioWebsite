// JavaScript for Portfolio Website
// Set active nav link based on current page
// Load projects from projects.json and display them

document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        // Special case for index.html (home page)
        if (currentPage === '' || currentPage === 'index.html') {
            if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        }
    });

    // Load projects
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            const container = document.getElementById('projects-container');
            container.innerHTML = '<p>Failed to load projects.</p>';
        });
});