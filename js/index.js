function showMenu() {
  document.querySelector('.menu-bars').classList.toggle('active');
  document.querySelector('.desktop-nav').classList.toggle('active');
}

document.getElementById('menu-bars').addEventListener('click', showMenu);
document.getElementById('nav-back').addEventListener('click', showMenu);
