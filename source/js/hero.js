const priceTarget = document.getElementById('price');
const targetPosition = priceTarget.offsetTop;
const membershipButton = document.querySelector('.hero__lower-button');

membershipButton.addEventListener('click', () => {
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
