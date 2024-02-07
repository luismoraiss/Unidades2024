let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

// Crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.
function combinarProdutoPreco(produtos,precos){
    return produtos.map((produto)=>{//listar todos os produtos individualmente
   let precoProduto = precos.find((preco)=>preco.nome === produto.nome)//comparação entre os arrays
  return{
    nome: produto.nome,
    categoria: produto.categoria,
    preco: precoProduto.preco,
  }
    })
}
const combinaProduto = combinarProdutoPreco(produtos,precos)
console.log(combinaProduto)




