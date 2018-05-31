const http = require('http');
const express = require("express");

const port = 5003;
const app = express();

app.get("/", (req, res) => {
    console.log("hello world on " + port);
});

const server = http.createServer(app);
server.listen(port);
console.log("server3 is running on 5003");