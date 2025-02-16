document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar-left");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});
