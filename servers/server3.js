const net = require('net');

net.createServer(function (socket) {

    socket.on('data', function(data){
        socket.write(data + " from 5003");
        console.log(data + " from 5003")
    })
}).listen(5003);
console.log("server3 is running on 5003");