var net = require('net');


var server = net.createServer(function(c) {
    c.on('end', function() {
    });
});


function accept() {

}

server.listen(process.argv[2], accept);
