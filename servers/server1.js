const net = require('net');
net.createServer(function (socket) {
    socket.setEncoding('utf8');
    socket.on('data', function(data){
        socket.write("Votre ticket a été pris en compte par l'equipe de maintenance :\n " + data)
    });
}).listen(5001);
console.log("server1 is running on 5001");