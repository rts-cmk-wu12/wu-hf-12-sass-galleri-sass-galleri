const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');

let isMenuOpen = false;

burgerIcon.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Skift mellem åben/lukket tilstand
    if (isMenuOpen) {
        burgerMenu.classList.add('active'); // Åbner menuen
    } else {
        burgerMenu.classList.remove('active'); // Lukker menuen
    }
});
