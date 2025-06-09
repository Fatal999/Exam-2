const faqButtons = document.querySelectorAll('.faq__item-button');
const faqCenter = document.querySelector('.faq__roster--center');
const faqSubscription = document.querySelector('.faq__roster--subscription');
const faqServices = document.querySelector('.faq__roster--services');
const faqRules = document.querySelector('.faq__roster--rules');

faqCenter.style.display = 'block';
faqSubscription.style.display = 'none';
faqServices.style.display = 'none';
faqRules.style.display = 'none';

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    faqButtons.forEach((active) => {
      active.classList.remove('faq__item-button--active');
    });

    button.classList.add('faq__item-button--active');

    if (button.classList.contains('faq__item-button--center')) {
      faqCenter.style.display = 'block';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'none';
      faqRules.style.display = 'none';
    } else if (button.classList.contains('faq__item-button--subscription')) {
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'block';
      faqServices.style.display = 'none';
      faqRules.style.display = 'none';
    } else if (button.classList.contains('faq__item-button--services')) {
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'block';
      faqRules.style.display = 'none';
    } else if (button.classList.contains('faq__item-button--rules')) {
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'none';
      faqRules.style.display = 'block';
    }
  });
});

const faqDescriptions = document.querySelectorAll('.faq__roster-item p');
const faqIconButtons = document.querySelectorAll('.faq__roster-button');

faqDescriptions.forEach((description) => {
  const button = description.closest('li').querySelector('.faq__roster-button');

  if (description.getAttribute('data-active') === 'true') {
    description.style.maxHeight = `${description.scrollHeight}px`;
    description.style.opacity = '1';
    description.style.marginBottom = '20px';
    button.setAttribute('data-state', 'minus');
  } else {
    description.style.maxHeight = '0';
    description.style.opacity = '0';
    description.style.marginBottom = '0';
    button.setAttribute('data-state', 'plus');
  }
});

faqIconButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const description = button.closest('li').querySelector('.faq__roster-item p');

    if (description.style.maxHeight === '0px') {
      description.style.maxHeight = `${description.scrollHeight}px`;
      description.style.opacity = '1';
      button.setAttribute('data-state', 'minus');
      description.style.marginBottom = '20px';
    } else {
      description.style.maxHeight = '0';
      description.style.opacity = '0';
      button.setAttribute('data-state', 'plus');
      description.style.marginBottom = '0px';
    }
  });
});

