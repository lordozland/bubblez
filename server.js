const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const PORT = 3333;

const handleRequest = (request, response) => {
    response.end('It works! Path hit ${request.url}')
}

const server = http.createServer(handleRequest)

server.listen(PORT, () => console.log("server is listening on local host ${PORT}"))

    