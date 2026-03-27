const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.nav-overlay');

// открытие меню
btnMenu.addEventListener('click', () => {
    navMenu.classList.add('open');
    overlay.classList.add('open');
});

// закрытие по крестику
document.querySelector('.btn-close').addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
});

// закрытие по клику на оверлей
overlay.addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
});