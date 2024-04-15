// classificar os itens de um vetor
const name = ['Carlos','Wilton','Fonseca']

console.log(name.sort())
console.log(name.reverse())

const numbers = [12,3,5,8,20]
console.log(numbers.sort((a,b)=>b - a))
console.log(numbers.sort((a,b)=>a - b))