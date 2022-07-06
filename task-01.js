

let ulList = document.getElementById("ingredients");
ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items)
});
console.log(foodIngredients);
