const arrayOriginal = [1,2,3,4]
const arrayFake = [...arrayOriginal]
console.log(arrayFake)

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
const juntar = [...array1, ...array2]
console.log(juntar)

const objOriginal = {nome: 'carlos', idade:23}
const objFake = {...objOriginal}
console.log(objFake)

const novoObjeto = {...objOriginal, profissao:'Developer'}
console.log(novoObjeto)

function soma(...numeros){
    return numeros.reduce((total, numero) => total + numero)
}

console