const numeros = {};

const inNumero = document.getElementById("inNumero");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnVerificarOrdem = document.getElementById("btnVerificarOrdem");

const outNumeros = document.getElementById("outNumeros");
const outResposta = document.getElementById("outResposta");

const adicionarNumero = () => {
  const numero = Number(inNumero.value);
  if (numero === 0 || isNaN(numero)) {
    alert("Número inválido");
    return;
  }
  const numeroIgual = numeros.includes(numero);
  if (numeroIgual) {
    alert("Numero repetido");
    inNumero.value = ''
    return
  }
  numeros.push(numero);
  outNumeros.textContent = `${numero.join(", ")}`;
  inNumero.value = "";
};

btnAdicionar.addEventListener("click", adicionarNumero);

const VerificaOrdem = () => {
if(numeros.length === 0){
    alert('Não existe elementos no array de números')
    return
}
const verificarArray = numeros.every((numero,index)=>{
    if(index === numeros.length - 1){
        return true
    }
    return numero < numeros[index+1]
})
if(verificarArray){
    outResposta.textContent = `Ordem Crescente`

}else{
    outResposta.textContent = `NÃO ESTÃO EM ordem crescente`
}
}

btnVerificarOrdem.addEventListener('click',VerificaOrdem)
