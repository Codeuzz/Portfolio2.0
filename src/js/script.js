document.addEventListener('DOMContentLoaded', () => {
    fetch('src/projects.json')
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error('Error fetching the projects:', error));
});

function displayProjects(projects) {
    const projectsContainer = document.querySelector('.projets-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('projet');
        projectElement.innerHTML = `
            <img class="project-img" src="${project.image}" alt="${project.title}">
            <div class="projet-text">
                <div class="projet-text-text">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="projet-langages">
                    ${project.technologies.map(tech => `<i class="devicon-${tech} colored"></i>`).join('')}
                </div>
                <div class="projet-liens">
                    <a href="${project.code}" target="_blank">Code <i class="devicon-github-original colored zoomEffect"></i></a>
                    <a href="${project.preview}" target="_blank">Live Preview <i class="fa-solid fa-arrow-up-right-from-square zoomEffect"></i></a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}