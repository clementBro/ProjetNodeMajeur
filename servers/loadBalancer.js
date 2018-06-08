const express = require('express');
const net = require('net');
const app = express();
const FirebaseService = require('../service/FirebaseService.js');

const bodyParser = require('body-parser');
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
    clientToCHild.setEncoding('utf8');
    clientToCHild.write(req.body.textprob);
    clientToCHild.on('data', function (dataToChild) {
        console.log('yolo');
        const db = new FirebaseService();
        db.addToFirebase(req.body).then( rep => {
            console.log(rep);
            res.send(dataToChild);
        }).catch(error =>{
            console.log(error);
            res.send('Nous recontrons des problèmes de maintenance, veuillez réessayer plus tard')
        });
    });
});
app.listen(8080);