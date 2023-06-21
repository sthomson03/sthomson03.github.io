function darkModeButton(event) {
    event.preventDefault(); // Prevent the default scroll behavior
    var element = document.body;
    element.classList.toggle("dark-mode");

    var darkModeButton = document.querySelector(".dark-mode-button");
    darkModeButton.classList.toggle("active");
}

// Smooth scrolling for touchscreen devices
if ("ontouchstart" in document.documentElement) {
    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }