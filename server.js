// Get dependencies
const express = require('express');
const path = require('path');
var http = require('http');
const bodyParser = require('body-parser');
const PORT = 3000;

// Get our API routes
const api = require('./server/routes/api');
var cors = require('cors');
var app = express();
app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/newcal-angular/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.set('port', PORT);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT, () => console.log(`API running on localhost:${PORT}`));