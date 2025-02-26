document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuList = document.getElementById("menuList");

    // Alternar la visibilidad del menú al hacer clic en el botón
    menuToggle.addEventListener("click", (event) => {
        menuList.classList.toggle("header__list--active");
        event.stopPropagation(); // Evita que el clic en el botón cierre el menú
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!menuList.contains(event.target) && !menuToggle.contains(event.target)) {
            menuList.classList.remove("header__list--active");
        }
    });
});

