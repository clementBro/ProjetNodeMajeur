net = require('net');
socket = new net.Socket();

var myNick = 'clement';
var port = '5000';
var host = '127.0.0.1';
client = net.connect({port: port, host: host}, function(){
    client.write("Hello, I'm "+ myNick);
});
