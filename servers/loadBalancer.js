const express = require('express');
const net = require('net');
const app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
console.log('hello from load-balancer');
let port = 0;
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.post('/contact', function (req, res) {

    console.log(req.body);
    if(req.body.problem === "b"){
        port = 5001;
        console.log('coucou port 5001');
    }
    else if(req.body.problem === "am"){
        port = 5002;
    }
    else {
        port = 5003;
    }
    let clientToCHild = net.connect({port: port, host: '127.0.0.1'});
    clientToCHild.write(req.body.textprob);
    clientToCHild.on('data', function (dataToChild) {
        res.send(dataToChild);
    });
});
app.listen(8080);

/*const net = require('net');

const PORTS =  [5001,5002,5003];


net.createServer(function (client) {
    let port = randomPort();
    client.write('load_balancer connected go to server :' + port);
    const clientToCHild = net.connect({port: port, host: '127.0.0.1'});


    client.on('data', function(data){
        clientToCHild.write(data)
    });
    clientToCHild.on('data', function (dataToChild) {
        client.write(dataToChild)
    });
    client.on('error', () => {
        client.write('the client with not found');
        clientToCHild.close();
        this.close();
    });
    clientToCHild.on('error',() =>  {
        client.write('the server with port:' + port + ' not found');
        client.close();
        this.close();
    });
}).listen(5000);

function randomPort () {
    return PORTS[Math.floor((Math.random() * 3))];
}
*/