
/*
* Open the drawer when the menu ison is clicked.
*/

let menu = document.querySelector('#menu');
let main = document.querySelector('main');
let drawer = document.querySelector('.nav-bar');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
document.body.addEventListener('click', function() {
  drawer.classList.remove('open');
});
