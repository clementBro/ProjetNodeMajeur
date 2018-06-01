net = require('net');
socket = new net.Socket();

const myNick = 'clement';
const port = '5000';
const host = '127.0.0.1';
const client = net.connect({port: port, host: host}, function(){
    this.write("Hello, I'm "+ myNick);
});

client.on('data', function(data){
    console.log(data.toString());
});
