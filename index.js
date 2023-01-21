var http = require("http");
const { url } = require("inspector");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url == "/") {
        res.end("PIZZA")
    }
    else if (req.url == "/welcome") {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Welcome to Dominos!");
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>PAGE NOT FOUND</h1>")
    }
}

httpServer.listen(8081,()=>console.log("Listen to the port 8081"))

module.exports = httpServer;