const net = require('net');

net.createServer(function (socket) {

    socket.on('data', function(data){
        socket.write("Votre ticket a été pris en compte par l'equipe de maintenance :\n " + data);
        console.log("from 5001")
    })
}).listen(5001);
console.log("server1 is running on 5001");