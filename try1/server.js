var http = require("http");
http.createServer(function (req,res) {
   res.writeHead(200,{"content-type":"text/html"})
   res.end("<h1>hello node.js</h1>") 
})
    .listen(8081);
    console.log("http://localhost:8081")