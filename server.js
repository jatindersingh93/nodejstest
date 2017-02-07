var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<!DOCTYPE html><html><head></head><body><h1>I haven't encountered a credit card request yet</h1></body></html>\n");
}).listen( 80 );

console.log('Server running on port ' + 80);