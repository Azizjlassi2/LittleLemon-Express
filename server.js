const express = require("express");

const server = express();
const port = 3000;

server.use(express.json());
server.use((req, res, next) => {
  console.log(req.method + " : " + req.url);
});

server.listen(port, () => {
  console.log("Server running !");
});
