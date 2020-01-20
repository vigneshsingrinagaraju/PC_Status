var express = require('express');
var compression = require('compression')
var app = express();
app.use(compression())
app.use(express.static("PC_Status")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});

app.listen(9090, '127.0.0.1');
console.log("MyProject Server is Listening on port 9090");


//const http = require('http');
//const port=process.env.PORT || 3000
//const server = http.createServer((req, res) => {
//res.statusCode = 200;
//res.setHeader('Content-Type', 'text/html');
//res.end('<h1>Hello World</h1>');
//});
//server.listen(port,() => {
//console.log(`Server running at port `+port);
//});