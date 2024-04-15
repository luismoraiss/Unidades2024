//Pesquisar e filtrando dados de uma array
const numbers = [1, 2, 3, 4, 5];

//Encontrar o primeiro elemento que sastifaz a condição
const encontrado = numbers.find((num) => num > 2);
console.log(encontrado);

//Cria um novo array com todos elementos que passaran no teste
const filter = numbers.filter((num) => num % 2 === 0);
console.log(filter);
//Verifica se um array possui um determinado valor, retorna true ou false
const includes = numbers.includes(4);
console.log(includes);
//Todos os elementos do array passam no teste lógico da função
const every = numbers.every((num) => num % 2 === 0);
console.log(every);
 //Verifica se pelos 
 const some = numbers.some((num) => num %2 == )