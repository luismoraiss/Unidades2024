const http = require("node:http");
const url = require("node:url");
const PORT = 3333;

// request -> url
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plan'})
    response.end('Pagina Inicial')
  } else if (response.url === "/sobre") {
    response.writeHead(200, {'Content-Type': 'text/plan'})
    response.end('Pagina Sobre')
}
else{
response.writeHead(200, {'Content-Type': 'text/plan'})
response.end('Pagina não encontrada')
}
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`);
});
