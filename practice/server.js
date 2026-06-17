const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Smart Library");
});

server.listen(3000, () => {
  console.log("Server running");
});