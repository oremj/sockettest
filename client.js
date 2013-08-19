var net = require('net');

var HOST='';
var PORTS=20;
var CLIENTS=50000;

var client;

var connected = 0;

function connect() {
    connected++;
}

function disconnect() {
    connected--;
}

setInterval(function() {
    console.log("%d connected", connected);
}, 2500);

function startConnections(clients) {
    var port = 9000 + (clients % PORTS);
    var c = net.connect({host: HOST, port: port}, connect);
    c.on('end', disconnect); 
    setTimeout(startConnections, 1, clients - 1);
}

startConnections(CLIENTS);
