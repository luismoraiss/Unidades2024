// Mostre os dados da aplicação, como apresentado na aula
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Appp = () => {
  const dados = luana;

  return (
    <div>
      <p>Cliente: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p style={dados.ativa == true ? {color: "green"} : {color: 'red'}}>situação: {dados.ativa ? "Ativa" : "Inativa"}</p>
    </div>
  );
};

export default Appp;
