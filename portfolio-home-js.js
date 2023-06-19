function darkModeButton(event) {
    event.preventDefault(); // Prevent the default scroll behavior
    var element = document.body;
    element.classList.toggle("dark-mode");


    var darkModeButton = document.querySelector(".dark-mode-button");
    darkModeButton.classList.toggle("active");
}