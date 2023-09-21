function toggleDarkMode(event) {
    event.preventDefault();
    var element = document.body;
    element.classList.toggle("dark-mode");

    var darkModeButton = document.querySelector(".dark-mode-button");
    darkModeButton.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    var darkModeButton = document.querySelector(".dark-mode-button");
    darkModeButton.addEventListener("click", toggleDarkMode);
    darkModeButton.addEventListener("touchstart", toggleDarkMode);

    var projectsMobile = document.querySelectorAll(".projects-mobile-container .project");
    var currentIndex = 0;

    // Function to scroll to the projects section
    function scrollToProjects() {
        var isMobile = window.innerWidth <= 480;
        
        // Determine the target section based on device
        var targetSectionId = isMobile ? "projects-mobile" : "projects-desktop";
        
        // Scroll to the target section smoothly
        var targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add an event listener to the "Projects" link in the navbar
    var projectsLink = document.querySelector(".navbar a[href='#projects-desktop']");
    projectsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        scrollToProjects();
    });


    function showProject(index) {
        projectsMobile.forEach(function(project, i) {
            if (i === index) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }

    var prevButton = document.querySelector(".prev-project");
    var nextButton = document.querySelector(".next-project");

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + projectsMobile.length) % projectsMobile.length;
        showProject(currentIndex);
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % projectsMobile.length;
        showProject(currentIndex);
    });
});
