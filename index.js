const path = require("path");
const http = require("http");
const express = require("express");
const PUBLIC_FOLDER = path.join(__dirname);
const app = express();
const server = http.createServer(app);
app.get("/", (req, res, next) => {
    res.sendFile(path.join(PUBLIC_FOLDER, "login.html"), {}, err => {
        if (err) {
            next(err);
        }
    });
});
app.use(express.static(PUBLIC_FOLDER));
server.listen(8080, () => {
    console.log(`Server started on port ${server.address().port}`);
});