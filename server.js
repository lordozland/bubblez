const http = require('http');

const PORT = 3333;

const handleRequest = (request, response) => {
    response.end('It works! Path hit ${request.url}')
}

const server = http.createServer(handleRequest)

server.listen(PORT, () => console.log("server is listening on local host ${PORT}"))