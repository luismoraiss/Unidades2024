const carros = []

const inModelo = document.getElementById('inModelo')
const inPreco = document.getElementById('inPreco')

const outLista = document.getElementById('outLista')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

const adicionarCarro = () =>{
    const modelo = inModelo.value;
    const preco = Number(inPreco.value);
    if(modelo === '' || preco <= 0 || isNaN(preco)){
        alert("informe os dados corretamente");
        inModelo.focus();
        return;
    }
    carros.push(
        {
        modelo:modelo,
        preco: preco
    });
    console.log(carros);
    inModelo.value = "";
    inPreco.value = "";
};
btnAdicionar.addEventListener("click",()=>{
const listarCarros = () =>{
    if(carros.length === 0){
        alert('não tem carros cadastrados')
        inModelo.focus()
        return
    }
    let listarCarros = ''
    carros.forEach((carro) => { return lista +- `${carro.modelo} --- ${carro.preco}`});
};
btnListar.addEventListener('click', adicionarCarro)

const filtrarPreco = () =>{
    const maximo = Number(prompt('digite o valor máximo que o clietne deseja pagar'))
    if(maximo === 0 || isNaN(maximo)){
        alert('Por favor, preencha os dados corretamente')
        return
    }
    const carrosFiltrados = carros.filter((carro)=>{
        return carro.preco <= maximo;
    });

    let lista = ""
    carrosFiltrados.forEach((carro) => {
        return (lista += `${carro.modelo} --- `)
    })
}});
btnFiltrar.addEventListener('click', filtrarPreco)
