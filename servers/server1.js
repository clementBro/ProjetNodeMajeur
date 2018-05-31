const http = require('http');
const express = require("express");

const port = 5001;
const app = express();

app.get("/", (req, res) => {
    console.log("hello world on " + port);
});

const server = http.createServer(app);
server.listen(port);
console.log("server1 is running on 5001");
