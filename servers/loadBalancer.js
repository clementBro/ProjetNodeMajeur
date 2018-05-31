const net = require('net');

const serversAddresses = [
    {address: '127.0.0.1', port: '5001'},
    {address: '127.0.0.1', port: '5002'},
    {address: '127.0.0.1', port: '5003'}
];

net.createServer(function (socket) {

    socket.on('data', function(data){
        server = getRandomServer(socket.remoteAddress);
        net.connect({port: server.port, server: server.address}, function(connection){
            console.log('message in load balancer');
            this.write(data);
        });
    })
}).listen(5000);

function getRandomServer() {
    return serversAddresses[Math.floor((Math.random() * 3))]
}

