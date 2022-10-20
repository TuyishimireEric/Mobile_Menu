document.getElementById('menu-bars').addEventListener(click, showMenu);

function showMenu() {
  document.querySelector('.menu-bars').classList.toggle('active');
  document.querySelector('.desktop-nav').classList.toggle('active');
}
  