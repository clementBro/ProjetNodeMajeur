const net = require('net');

net.createServer(function (socket) {

    socket.on('data', function(data){
        socket.write("Votre ticket a été pris en compte par l'equipe de développement :\n " + data);
        console.log(data + " from 5002")
    })
}).listen(5002);
console.log("server2 is running on 5002");