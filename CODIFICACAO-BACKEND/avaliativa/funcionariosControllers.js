import fs from "node:fs";

const lerDadosFuncionarios = (callback) => {
  fs.readFile("funcionarios.json", "utf8", () => {
    if (err) {
      callback(err);
      return;
    }
    try {
      const funcionario = JSON.parse(data);
      callback(null, funcionario);
    } catch (error) {
      callback(error);
    }
  });
};

const cadastrarFuncionarios = (callback) => {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
  });
  request.on("end", () => {7
    fs.readFile("funcionarios.json", "utf8", () => {
      if (err) {
        callback(err);
        return

      }
      const jsonData = JSON.parse(data);
      const novoFuncionario = JSON.parse(body);
      novoFuncionario.id = jsonData.length + 1;
      jsonData.push(novoFuncionario);
      fs.writeFile(
        "funcionarios.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            callback(err);
            return;
          }
        }
      );
    });
  });
};

export default cadastrarFuncionarios;
