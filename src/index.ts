import http from "http";

const server = http.createServer((request, response) => {
  response.end("Hello, ESGI");
});

server.listen(8000, "0.0.0.0", () => {
  console.log("Server listeining on http://0.0.0.0:8000");
});
