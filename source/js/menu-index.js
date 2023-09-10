/* Menu toggler */

let toggle = document.querySelector('.header__toggle');
let list = document.querySelector('.header__list');
let promo = document.querySelector('.promo');

toggle.classList.add('header__toggle--close');
list.classList.add('header__list--close');
promo.classList.add('promo--close');

toggle.onclick = function () {
  toggle.classList.toggle('header__toggle--open');
  list.classList.toggle('header__list--close');
  promo.classList.toggle('promo--close');
}
