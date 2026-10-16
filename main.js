const menu = document.getElementById('menu');
const openButton = document.querySelector('.menu-toggle');
const closeButton = menu.querySelector('.close');

function setMenu(open) {
  menu.classList.toggle('open', open);
  openButton.setAttribute('aria-expanded', open);
  if (open) menu.querySelector('a').focus();
  else openButton.focus();
}

openButton.addEventListener('click', () => setMenu(true));
closeButton.addEventListener('click', () => setMenu(false));
menu.addEventListener('click', (e) => { if (e.target === menu) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false); });
