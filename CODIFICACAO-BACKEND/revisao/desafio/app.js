const btnAdicionar = document.getElementById("btnAdicionar");
const btnUrgencia = document.getElementById("btnUrgencia");
const btnAtender = document.getElementById("btnAtender");
const array = [];

btnAdicionar.addEventListener("click", () => {
  const inPaciente = document.getElementById("inPaciente").value;
  array.push(inPaciente);
  const pre = document.getElementById("outlist");
  pre.innerHTML = `<h3>${array}</h3>`;
});

btnUrgencia.addEventListener("click", () => {
  const inPaciente = document.getElementById("inPaciente").value;
  array.unshift(inPaciente);
  const pre = document.getElementById("outlist");
  pre.innerHTML = `<h3>${array}</h3>`;
});

btnAtender.addEventListener("click", () => {
  const inPaciente = document.getElementById("inPaciente").value;
  const span = document.getElementById("outAtendimento");
  span.innerHTML = `${inPaciente}`;
  array.shift(inPaciente);
  const pre = document.getElementById("outlist");
  pre.innerHTML = `<h3>${array}</h3>`;
});
