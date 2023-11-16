function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
function toggleDarkMode2() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const thirdLine = document.getElementById('thirdLine');
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('menu-active');
    menuToggle.classList.toggle('menu-toggle1');
    thirdLine.classList.toggle('third-line1');
    }
