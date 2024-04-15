const btnApostar = document.getElementById("btnApostar");
const btnJogar = document.getElementById("btnJogar");
let numeroSorteado = Math.floor(Math.random() * 100);
console.log(numeroSorteado);
const tentativas = 6;
const arrayErro = [];

btnApostar.addEventListener("click", () => {
  const inNumero = Number(document.getElementById("inNumero").value);
  console.log(inNumero);

  //validação
  if (inNumero <= 0 || isNaN(inNumero)) {
    alert("Número inválido");
    inNumero.focus();
    return;
  }

  if (inNumero === numeroSorteado) {
    const dica = document.getElementById("outDica");
    btnApostar.disabled = true;
    dica.textContent = `Fim de jogo! Número sorteado:${numeroSorteado}`;
  } else {
    if (arrayErro.indexOf(inNumero) >= 0) {
      alert(`Você já apostou o ${inNumero}... Tente outro`);
    } else if (inNumero > numeroSorteado) {
      const dica = document.getElementById("outDica");
      dica.textContent = `O número sorteado é menor que ${inNumero}`;
      arrayErro.push(dica);
      const erro = document.getElementById("outErros");
      erro.textContent = `${arrayErro}`;
    } else if (inNumero < numeroSorteado) {
      const dica = document.getElementById("outDica");
      dica.textContent = `O número sorteado é maior que ${inNumero}`;
      arrayErro.push(dica);
      const erro = document.getElementById("outErros");
      console.log(arrayErro);
      erro.textContent = `${arrayErro}`;
    }
  }
});

//Reiniciar jogo
btnJogar.addEventListener("click", () => {
  window.location.reload();
});
