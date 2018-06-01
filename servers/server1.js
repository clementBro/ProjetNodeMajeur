const net = require('net');

net.createServer(function (socket) {

    socket.on('data', function(data){
        socket.write(data + " from 5001");
        console.log(data + " from 5001")
    })
}).listen(5001);
console.log("server1 is running on 5001");