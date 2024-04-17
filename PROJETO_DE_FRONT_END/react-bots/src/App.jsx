import React from 'React'

// Estados
// O estado de uma aplicação representa as características dela naquele momento

// const App = () => {
//   const ativo = true;

//   return <button disabled={!ativo}>{ativo ? "Botão ativo" : "Botão Inativo"}</button>;
// };

// export default App

//Hooks
//OS hooks são funções especiais de React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais

// React.useState - É uma função que retorna  um array com 2 valores. O primeiro valor  guarda o dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, numeros, boolean, null, undefined ou objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

// Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estados, serão renderizados e os seus filhos também. é issop que garante a reatividade de componentes funcionais no react                              

const App = () => {
 
  const [ativo, setAtivo] = React.useState(true);
  const [contar, setContar] = React.useState(0);

  return( 
    <>
   <button onClick={() => setAtivo(!ativo)}>
    {ativo ? "Botão Ativo" : "Botão Inativa"}
   </button>

   <button onClick={() => setContar(contar + 1)}>
    {contar}
 </button>
 </>
  )
};

export default App