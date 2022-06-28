
let inputName = document.querySelector('#name-input');
inputName.addEventListener('input', onInputChange);

let outputName = document.querySelector('#name-output');

function onInputChange(event) {
  inputName = event.currentTarget.value;
  console.log(inputName);

  inputName !== ' ' ? (outputName.innerText = inputName.trim()) : "Anonymous";
}