const form = document.getElementById("form-calculo");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorA = parseFloat(campoA.value);
  const valorB = parseFloat(campoB.value);

  if (valorA < valorB) {
    alert("Parabéns, o campo B é maior que o campo A.");
  } else {
    alert("O campo A é menor que o B, aumente o valor.");
  }
});
