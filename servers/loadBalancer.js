const net = require('net');

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