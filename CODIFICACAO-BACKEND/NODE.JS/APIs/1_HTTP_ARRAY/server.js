import http, { request } from "node:http";

const PORT = 3333;

//Métodos: GET, POST, ,PUT, PATH, DELETE.
/*
 REQUISIÇÃO
 1. Corpo da requisição (request.body) (POST)
 2. Parâmetro de busca (Search PARAMS, QUERY PARAMS)  http://localhost:3333/users/2 (GET)
 3. Parâmetros de ROTA (ROUTE PARAMS) - http://localhost:3333/users/1 (PUT,PATH, DELETE)
*/

//Códigos
const users = [];
const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    //Buscar todos os usuários
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  } else if (url.startsWith(`/users/`) && method === "GET") {
    //Buscar um único usuário
    const userId = url.split("/")[2];
    const user = users.find((user) => user.id == userId);

    if (user) {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(user));
    } else {
      response.write(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Usuário não encontrado" }));
    }
  } else if (url === "/users" && method === "POST") {
    //Responsável por cadastrar um usuário
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const novoUsario = JSON.parse(body);
      novoUsario.id = users.length + 1;
      users.push(novoUsario);
      response.writeHead(201, { "Content-Type": "application/json" });
      response.end(JSON.stringify(novoUsario));
    });
  } else if (url.startsWith(`/users/`) && method === "PUT") {
    //Atualizar um usuário
    const userId = url.split("/")[2];

    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const updateUser = JSON.parse(body);
      const index = users.findIndex((user) => user.id == userId);
      if (index !== -1) {
        users[index] = { ...users[index], updateUser };
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(users[index]));
      } else {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro ao tentar atualizar" }));
      }
    });
  } else if (url.startsWith(`/users/`) && method === "DELETE") {
    const userId = url.split("/")[2];
    const index = users.findIndex((user) => user.id == userId);
    if (index !== -1) {
      users.splice(index, 1);
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ message: "Usuário excluído" }));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Erro ao tentar excluir" }));
    }
  } else {
    //Recurso não encontrado
  }
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`);
});
