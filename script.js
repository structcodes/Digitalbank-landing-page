const menuBtn = document.getElementById('Meubtn');
const menuIcon = document.getElementById('menu-icon');
const menuList = document.querySelector('.navigation-menu > ul');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;

  // Alterna a classe "active" no <ul>
  menuList.classList.toggle('active');

  // Troca o ícone
  menuIcon.src = menuOpen
    ? 'images/icon-close.svg'
    : 'images/icon-hamburger.svg';
});
