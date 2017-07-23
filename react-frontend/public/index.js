'use strict';
const http = require('http');
const serveFragment = require('./fragment');

const fragment = http.createServer(
    serveFragment('React', 'http://localhost:3000')
);
fragment.listen(3000);