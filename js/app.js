document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const navbarMenu = document.getElementById("navbar-menu");

    // Open menu
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.add("active");
    });

    // Close menu
    closeMenu.addEventListener("click", function () {
        navbarMenu.classList.remove("active");
    });
});
