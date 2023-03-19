const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const expectedLength = Number(input.dataset.length);
  const actualLength = input.value.length;

  if (actualLength === expectedLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
