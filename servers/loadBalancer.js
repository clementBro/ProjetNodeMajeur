const net = require('net');

const serversAddresses = [
    {address: '127.0.0.1', port: '5001'},
    {address: '127.0.0.1', port: '5002'},
    {address: '127.0.0.1', port: '5003'}
];

net.createServer(function (socket) {

    server = getRandomServer();
    const clientToServ = net.connect({port: server.port, server: server.address});

    socket.on('data', function(data){
        console.log('socket data event');
        clientToServ.write(data);
    });
    clientToServ.on('data', function(data){
        console.log('clientToServ data event');
        socket.write(data);
    });

    clientToServ.on('error', function(){
        console.log('distant server on port : ' + server.port + 'not found');
        socket.close();
    });
    socket.on('error', function(){
        console.log('client not found');
        clientToServ.close();
    });
}).listen(5000);

function getRandomServer() {
    return serversAddresses[Math.floor((Math.random() * 3))]
}

