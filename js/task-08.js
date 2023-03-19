const form = document.querySelector('.login-form');

console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields!');
    return;
  }

  const userData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(userData);

  form.reset();
});
