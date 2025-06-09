const nameInput = document.querySelector('.form__fields-name');
const telInput = document.querySelector('.form__fields-tel');
const nameError = document.querySelector('.form__fields-name-error');
const telError = document.querySelector('.form__fields-tel-error');
const submitButton = document.querySelector('.form__fields-submit');
const validSymbols = /[^a-zA-Zа-яА-ЯёЁ\s]/;
const validTelSymbols = /^[0-9]*$/;

nameInput.addEventListener('input', () => {
  if (validSymbols.test(nameInput.value) || nameInput.value.length === 0) {
    nameError.style.display = 'block';
    submitButton.disabled = true;
  } else {
    nameError.style.display = 'none';
    submitButton.disabled = false;
  }
});

telInput.addEventListener('input', () => {
  if (!validTelSymbols.test(telInput.value) || telInput.value.length === 0) {
    telError.style.display = 'block';
    submitButton.disabled = true;
  } else {
    telError.style.display = 'none';
    submitButton.disabled = false;
  }
});
