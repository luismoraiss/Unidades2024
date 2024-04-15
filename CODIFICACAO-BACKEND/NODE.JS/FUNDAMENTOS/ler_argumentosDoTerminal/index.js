console.log(process.agrv);

const args = process.agrv.slice(2);

console.log(args);

const nome = args[0].split("=")[1]; //nome=carlos
console.log(nome);

const idade = args[1].split("=")[1]; //nome=carlos
console.log(idade);
console.log(`O nome ${nome} e idade ${idade} anos`);
