
/*
* Open the drawer when the menu ison is clicked.
*/

const menu = document.querySelector('#menu');
const drawer = document.querySelector('.nav-bar');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
document.body.addEventListener('click', function() {
  drawer.classList.remove('open');
});
