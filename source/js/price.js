const priceButtons = document.querySelectorAll('.price__wrapper-button');
const backgroundPriceTrainer = document.querySelector('.price__item-background--trainer');
const priceTrainer = document.querySelector('.price__item-wrapper-price--trainer');
const backgroundPriceDay = document.querySelector('.price__item-background--day');
const priceDay = document.querySelector('.price__item-wrapper-price--day');
const backgroundPriceFullDay = document.querySelector('.price__item-background--full-day');
const priceFullDay = document.querySelector('.price__item-wrapper-price--full-day');

priceButtons.forEach((priceButton) => {
  priceButton.addEventListener('click', () => {
    if (!priceButton.classList.contains('price__wrapper-button--active')) {
      priceButtons.forEach((membership) => {
        membership.classList.remove('price__wrapper-button--active');
      });

      priceButton.classList.add('price__wrapper-button--active');

      if (priceButton.classList.contains('price__wrapper-button--active')) {
        if (priceButton.classList.contains('price__wrapper-button--month')) {
          backgroundPriceTrainer.textContent = '5000';
          priceTrainer.textContent = '5000';
          backgroundPriceDay.textContent = '1700';
          priceDay.textContent = '1700';
          backgroundPriceFullDay.textContent = '2700';
          priceFullDay.textContent = '2700';
        } else if (priceButton.classList.contains('price__wrapper-button--half-a-year')) {
          backgroundPriceTrainer.textContent = '30000';
          priceTrainer.textContent = '30000';
          backgroundPriceDay.textContent = '10200';
          priceDay.textContent = '10200';
          backgroundPriceFullDay.textContent = '16200';
          priceFullDay.textContent = '16200';
        } else if (priceButton.classList.contains('price__wrapper-button--year')) {
          backgroundPriceTrainer.textContent = '60000';
          priceTrainer.textContent = '60000';
          backgroundPriceDay.textContent = '20400';
          priceDay.textContent = '20400';
          backgroundPriceFullDay.textContent = '32400';
          priceFullDay.textContent = '32400';
        }
      }
    }
  });
});
