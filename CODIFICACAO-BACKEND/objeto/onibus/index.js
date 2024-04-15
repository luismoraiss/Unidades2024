const data = require("./onibus.json");

// Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.

const horarioPorLinha = (idLinha) => {
  const linha = data.linhas.find((linha) => linha.id == idLinha);

  if (linha) {
    const horarios = linha.horarios.map((horario) => {
      return `Saída: ${horario.saida}, chegada: ${horario.chegada}`
    });
    return horarios
    } else {
    return { message: "Não foi encontrada uma linha" };
  }
};

const id = 1;
const horarioLinhas = horarioPorLinha(id);
console.log(horarioLinhas);
