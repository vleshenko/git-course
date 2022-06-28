let inputSymbol = document.querySelector('#validation-input');

let inputLength = inputSymbol.dataset.length;

const input = document.querySelector('input');
inputSymbol.addEventListener('change', el => {
  const symbols = el.target.value;

    if (symbols.length === +inputLength)
    {
    inputSymbol.classList.add('valid');
    inputSymbol.classList.remove('invalid');
    }
  else
  {
    inputSymbol.classList.remove('valid');
    inputSymbol.classList.add('invalid');
  }
    
});