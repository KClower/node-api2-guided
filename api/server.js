// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();

server.use(express.json());

const adoptersRouter = require('./adopters/adopters-router.js');
server.use("/api/adopters", adoptersRouter);


const dogsRouter = require('./dogs/dogs-router.js');
server.use("/api/dogs", dogsRouter);

// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS


// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS


// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
