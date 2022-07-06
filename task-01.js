// "use strict";

// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Category: ${categories.children[0].textContent}
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

const getCategories = document.querySelector('#categories');const getElementsItem = document.querySelectorAll('.item');
const isQuantityOfCategories = getCategories.childElementCount;
console.log(`Number of categories: ${isQuantityOfCategories}`);
getElementsItem.forEach(element => {    const categoryItemName = element.firstElementChild.textContent;    const categoryItemLength = element.lastElementChild.childElementCount;
    console.log(`Category: ${categoryItemName}`);    console.log(`Elements: ${categoryItemLength}`);    });
