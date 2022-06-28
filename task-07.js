const textSymbol = document.getElementById("text");

const inputSymbol = document.getElementById("font-size-control");

inputSymbol.addEventListener("input", (a) => {
  const size = inputSymbol.value;
  

  textSymbol.style.fontSize = size + "px";
});