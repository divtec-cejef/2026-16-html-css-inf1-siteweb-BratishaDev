/* ------- Accueil ------- */

const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.nav-overlay');

// Ouverture du menu
btnMenu.addEventListener('click', () => {
    navMenu.classList.add('open');
    overlay.classList.add('open');
});

// Fermer en cliquant sur la croix
document.querySelector('.btn-close').addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
});

// Fermer en cliquant sur la superposition
overlay.addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
});

/* ------- GUIDE DES INGRÉDIENTS ------- */

// Accordion — toggle ingredient details on header click
document.querySelectorAll('.ingredient-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        const isOpen = details.classList.contains('open');

        // Collapse all open sections before expanding the clicked one
        document.querySelectorAll('.ingredient-details.open').forEach(el => {
            el.classList.remove('open');
            el.previousElementSibling.setAttribute('aria-expanded', 'false');
        });

        // Toggle current section unless it was already open
        if (!isOpen) {
            details.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});