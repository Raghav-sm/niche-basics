const http = require('http');
const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world");
  }
  else if (req.url == '/login') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Login Successful mate");
  } else {
    a
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("404 Artic Monkeys");
  }
});

server.listen(port, hostname, () => { //port,host,callback
  console.log(`We are listening on http://${hostname}:${port}`);
})