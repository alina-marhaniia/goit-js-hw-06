const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('ul');

for (const ingredient of ingredients) {
  console.log(ingredient);
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  listEl.appendChild(liEl);
}

console.log(listEl);

// const markup = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
// console.log(markup);

// listEl.insertAdjacentHTML('beforeend', markup);
