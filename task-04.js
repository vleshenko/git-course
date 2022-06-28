let valuel = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  // console.log("Вешаю слушателя события на целевую кнопку");
  valuel += 1;

  counterValue.innerText = valuel;
});

dekrBtn.addEventListener('click', event => {
  // console.log("Снимаю слушателя события с целевой кнопки");
  valuel -= 1;

  counterValue.innerText = valuel;
  // console.log("counterValue", counterValue);
});