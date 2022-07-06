

const categoriesAnimal = document.querySelectorAll(".item");
console.log(`Categories ${categoriesAnimal.length}`);
categoriesAnimal.forEach((elem) => {
return console.log(`Category: ${elem.querySelector("h2").textContent}
Elements:${elem.querySelectorAll("li").length}`);
});
