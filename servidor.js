var http = require('http');


http.createServer(function (request, respuesta) {
  respuesta.writeHead(200, {'Content-Type': 'text/plain'});
  respuesta.write("HolaS Mundo en Github");
  respuesta.end();
}).listen(3000, 'https://ellpz04.github.io/node2o');


console.log('Server running at https://ellpz04.github.io/node2o/);
