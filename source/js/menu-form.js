/* Menu toggler */

let toggle = document.querySelector('.header__toggle');
let list = document.querySelector('.header__list');
let order = document.querySelector('.order');

toggle.classList.add('header__toggle--close');
list.classList.add('header__list--close');
order.classList.add('order--close');

toggle.onclick = function () {
 toggle.classList.toggle('header__toggle--open');
 list.classList.toggle('header__list--close');
 order.classList.toggle('order--close');
}




