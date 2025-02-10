// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// create a server that listens on port 3000
const port = 3000;

// create a server that listens on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// create a route that listens for GET requests on the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Jungle');
});

// create a route that listens for GET requests on the /comments path
app.get('/comments', (req, res) => {
  res.send('This is the comments path');
});

// create a route that listens for POST requests on the /comments path
app.post('/comments', (req, res) => {
  res.send('You have sent a POST request to /comments');
});

// create a route that listens for PUT requests on the /comments path
app.put('/comments', (req, res) => {
  res.send('You have sent a PUT request to /comments');
});

// create a route that listens for DELETE requests on the /comments path
app.delete('/comments', (req, res) => {
  res.send('You have sent a DELETE request to /comments');
});

// create a route that listens for GET requests on the /comments/:id path
// :id is a route parameter
app.get('/comments/:id', (req, res) => {
  res.send(`You have requested comment ${req.params.id}`);
});

// create a route that listens for GET requests on the /comments/:id path
// :id is a route parameter
app.get('/comments/:id/:name', (req, res) => {
  res.send(`You have requested comment ${req.params.id} by ${req.params.name}`);
});

// create a route that listens for GET requests on the /comments/:id path
// :id is a route parameter
app.get('/comments/:id/:name/:age', (req, res) => {
  res.send(`You have requested comment ${req.params.id} by ${req.params.name} who is ${req.params.age} years old`);
});

// create a route that listens for GET requests on the /comments/:id path
// :id is a route parameter
app.get('/comments/:id/:name/: