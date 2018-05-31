const http = require('http');
const express = require("express");

const port = 5002;
const app = express();

app.get("/", (req, res) => {
    console.log("hello world on " + port);
});

const server = http.createServer(app);
server.listen(port);
console.log("server2 is running on 5002");