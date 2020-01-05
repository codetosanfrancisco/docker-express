'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is the Root Page!');
});

app.get('/login', (req,res) => {
  res.send('This is the Login Page!')
})

app.get("/products", (req, res) => {
  res.send('This is the Products Page!')
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


// Volume just gives a running container the ability to see files  on the host machine file system, they do not change the image
// docker run -p 8080:8080 -v /Users/voonshunzhi/Documents/docker-express/:/usr/src/app docker-express:0.1

// -p 8080:8080 meaning to forward the request from port 8080 of the Host OS to port 8080 of the going-to-run container