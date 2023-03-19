// const categoriesList = document.querySelectorAll('#categories .item');
// console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryItems = category.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Number of items: ${categoryItems}`);
// });

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (const item of categoriesItems) {
  const titleEl = item.firstElementChild;
  const categoryItems = item.lastElementChild.children;
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements count: ${categoryItems.length}`);
}
