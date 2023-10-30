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

    var submitButton = document.getElementById("submit-button");
    var contactForm = document.getElementById("contact-form");

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

    submitButton.addEventListener("click", function() {
        var formData = new FormData(contactForm);
        var firstName = formData.get("firstname");
        var lastName = formData.get("surname");
        var message = formData.get("subject");

        var mailtoLink = "mailto:sthomson0812@gmail.com"
            + "?subject=Message%20from%20" + encodeURIComponent(firstName + " " + lastName)
            + "&body=" + encodeURIComponent(message);

        window.location.href = mailtoLink;
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
