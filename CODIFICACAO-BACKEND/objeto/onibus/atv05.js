 const data = require("./onibus.json");

// Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.

const InformacoesBusu = (idOnibus) => {
    const onibus = data.onibus.find((onibus) => onibus.id == idOnibus);
    if (onibus) {
      console.log(onibus);
    } else {
      console.log({ message: "não foi encontrada um onibus com esse id" });
    }
  };
  
  const idOnibus = "A102";
  
  InformacoesBusu(idOnibus);