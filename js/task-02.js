const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('ul');

const listItems = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
});

listEl.append(...listItems);

console.log(listEl);

// const markup = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
// console.log(markup);

// listEl.insertAdjacentHTML('beforeend', markup);
