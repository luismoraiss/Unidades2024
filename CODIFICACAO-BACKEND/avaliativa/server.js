import http from "node:http";
import fs from "node:fs";
import { URLSearchParams } from "node:url";

import lerDadosFuncionarios from "./funcionariosControllers.js";

const PORT = 3333;
const server = http.createServer((request, response) => {
  const { method, url } = request;

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Origin-Methods","GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Origin-Headers", "Content-Type");

  if (method === "GET" && url === "/empregados") {
    lerDadosFuncionarios((err, funcionarios) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor" }));
      }
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(funcionarios));
    });
  } else if (method === "GET" && url === "/empregados/count/") {
      
    lerDadosFuncionarios((err, funcionarios) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor" }));
      }

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(funcionarios.filter((funcionario)=> funcionario.cargo === cargo)));
    });
    
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor" }));
        return;
      }

      const jsonData = JSON.parse(data);
      const totalFuncionarios = jsonData.length;

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(
        JSON.stringify({message: `Total de funcionários: ${totalFuncionarios}`})
      );
  } else if (method === "GET" && url.startsWith("/empregados/porCargo/")) {
    const cargo = url.split("/")[3];

    lerDadosFuncionarios((err, funcionarios) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor" }));
      }

      const jsonData = JSON.parse(data);
      const funcionarioPorCargo = jsonData.filter(
        (funcionario) => funcionario.cargo === cargo
      );

      if (funcionarioPorCargo.length === 0) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Funcionario não encontrado" }));
        return;
      }

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(funcionarioPorCargo));
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(funcionarios));
    });
    
    
  } else if (method === "GET" && url.startsWith("/empregados/porHabilidade/")) {
    const habilidade = url.split("/")[3];
    fs.readFile("funcionarios.json", "utf8", (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor" }));
        return;
      }

      const jsonData = JSON.parse(data);
      const funcionarioPorHabilidade = jsonData.filter((funcionario) =>
        funcionario.habilidade.includes(habilidade)
      );

      if (funcionarioPorHabilidade.length === 0) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({
            message: "Não existe funcionario com essa habilidade",
          })
        );
        return;
      }
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(funcionarioPorHabilidade));
    });
  } else if (method === "GET" &&url.startsWith("/empregados/porFaixaSalarial")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const minSalario = urlParams.get("minSalario");
    const maxSalario = urlParams.get("maxSalario");

    fs.readFile("funcionarios.json", "utf8", (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor" }));
        return;
      }

      const jsonData = JSON.parse(data);
      const funcionarioPorFaixaSalarial = jsonData.filter(
        (funcionario) =>
          funcionario.salario >= minSalario && funcionario.salario <= maxSalario
      );

      if (funcionarioPorFaixaSalarial.length === 0) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({
            message: "Não existe funcionario com essa faixa salarial",
          })
        );
        return;
      }

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(funcionarioPorFaixaSalarial));
    });
  } else if (method === "GET" && url.startsWith("/empregados/")) {
    
  } else if (method === "POST" && url === "/empregados") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      fs.readFile("funcionarios.json", "utf8", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Erro interno no Servidor" }));
          return;
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
              response.writeHead(500, { "Content-Type": "application/json" });
              response.end(
                JSON.stringify({ message: "Erro interno no Servidor" })
              );
              return;
            }
            response.writeHead(201, { "Content-Type": "application/json" });
            response.end(JSON.stringify(novoFuncionario));
          }
        );
      });
    });
  } else if (method === "PUT" && url.startsWith("/empregados/")) {
    const id = parseInt(url.split("/")[2]);
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      fs.readFile("funcionarios.json", "utf8", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Erro interno do servidor" }));
          return;
        }
        const jsonData = JSON.parse(data);
        const indexFuncionarios = jsonData.findIndex(
          (funcionario) => funcionario.id === id
        );
        if (indexFuncionarios === -1) {
          response.writeHead(404, { "Content-Type": "application/json" });
          response.end(
            JSON.stringify({ message: "funcionario não encontrado" })
          );
          return;
        }
        const funcionarioAtualizado = JSON.parse(body);
        funcionarioAtualizado.id = id;
        jsonData[indexFuncionarios] = funcionarioAtualizado;
        fs.writeFile(
          "funcionarios.json",
          JSON.stringify(jsonData, null, 2),
          (err) => {
            if (err) {
              response.writeHead(500, { "Content-Type": "application/json" });
              response.end(JSON.stringify({ message: "Erro salvar os dados" }));
              return;
            }
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(funcionarioAtualizado));
          }
        );
      });
    });
  } else if (method === "DELETE" && url.startsWith("/empregados/")) {
    const id = parseInt(url.split("/")[2]);
    fs.readFile("funcionarios.json", "utf8", (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }));
        return;
      }

      const jsonData = JSON.parse(data);
      const indexFuncionarios = jsonData.findIndex(
        (funcionario) => funcionario.id === id
      );

      if (indexFuncionarios === -1) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Funcionário não encontrado" }));
        return;
      }
      jsonData.splice(indexFuncionarios, 1);
      fs.writeFile(
        "funcionarios.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            response.writeHead(500, { "Content-Type": "application/json" });
            response.end(
              JSON.stringify({
                message: "Erro ao salvar os dados no Banco de dados",
              })
            );
            return;
          }
          response.writeHead(200, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Funcionário excluído" }));
        }
      );
    });
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: `Página não encontrada` }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}😎`);
});

