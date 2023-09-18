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
