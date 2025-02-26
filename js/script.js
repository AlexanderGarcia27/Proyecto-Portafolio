// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuList = document.getElementById("menuList");

    menuToggle.addEventListener("click", function () {
        menuList.classList.toggle("header__list--active");
    });
});
