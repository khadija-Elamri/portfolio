// Script pour gérer le menu mobile et l'état actif
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    if(btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    // Highlight lien actif
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('text-blue-600', 'font-semibold');
        }
    });
});