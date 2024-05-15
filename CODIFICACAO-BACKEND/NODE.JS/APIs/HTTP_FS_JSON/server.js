import http, { METHODS } from "node:http";
import fs from "node:fs";
import { v4 as uuidv4 } from "uuid";
import { json } from "stream/consumers";
console.log(uuidv4());

const PORT = 3333;
//titulo,autor,genero,anoDePublicação, [personagens]
const server = http.createServer((request, response) => {
  const { url, method } = request;

  fs.readFile("livros.json", "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Erro interno do servidor" }));
      return;
    }

    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      console.log(error);
    }

    if (url === "/livros" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(jsonData));
    } else if (url === "/livros" && method === "POST") {
      let body = "";
      request.on("data", (chunck) => {
        body += chunck.toString();
      });
      request.on("end", () => {
        const novoLivro = JSON.parse(body);
        novoLivro.id = uuidv4();
        jsonData.push(novoLivro);
        fs.writeFile("livros.json", JSON.stringify(jsonData, null), (err) => {
          if (err) {
            response.writeHead(500, { "Content-Type": "application" });
            response.end(
              JSON.stringify({ message: "Erro interno no servidor" })
            );
            return;
          }
          response.writeHead(201, { "Content-Type": "application/json" });
          response.end(JSON.stringify(novoLivro));
        });
      });
    } else if (url.startsWith("/livros/") && method === "PUT") {
      const id = url.split("/")[2];
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        const livroAtualizado = JSON.parse(body);
        const index = jsonData.findIndex((livro) => livro.id == id);
        if (index !== -1) {
          jsonData[index] = { ...jsonData[index], ...livroAtualizado };
          fs.writeFile(
            "livros.json",
            JSON.stringify(jsonData, null, 2),
            (error) => {
              if (error) {
                response.writeHead(500, { "Content-Type": "application/json" });
                response.end(
                  JSON.stringify({ message: "Erro interno no servidor" })
                );
                return;
              }
              response.writeHead(200, { "Content-Type": "application/json" });
              response.end(JSON.stringify(jsonData[index]));
            }
          );
        }
      });
      console.log(id);
      response.end();
    } else if (url.startsWith("/livros/") && method === "DELETE") {
      const id = url.split("/")[2];
      const index = jsonData.findIndex((livro) => livro.id == id);

      if (index !== -1) {
        4;
        fs.writeFile(
          "livros.json",
          JSON.stringify(jsonData, null, 2),
          (error) => {
            if (error) {
              response.writeHead(500, { "Content-Type": "application/json" });
              response.end(
                JSON.stringify({ message: "Erro interno no servidor" })
              );
              return;
            }
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(
              JSON.stringify({ message: "Livro removido com sucesso" })
            );
          }
        );
      } else {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Livro não encontrado" }));
      }
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Página não encontrada" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}😁`);
});
