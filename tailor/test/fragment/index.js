'use strict';

const http = require('http');

// Fragment server - Any http server that can serve fragments
http.createServer((req, res) => {
    // just some js
    if (req.url === '/script.js') {
    res.setHeader('Content-Type', 'application/javascript');
    return res.end('c=!setInterval(\'document.getElementById("c").innerHTML=c++;\', 1e3)');
}

// and some css
if (req.url === '/styles.css') {
    res.setHeader('Content-Type', 'text/css');
    return res.end('body { background: #303F9F; color: white }');
}

// Every Fragment sends a link header that describes its resources - css and js
const css = '<http://localhost:8081/styles.css>; rel="stylesheet"';
// this will be fetched using require-js as an amd module
const js = '<http://localhost:8081/script.js>; rel="fragment-script"';

res.writeHead(200, {
    Link: `${css}, ${js}`,
    'Content-Type': 'text/html',
});

// fragment content
res.end('<div>Fragment 1: <span id=\'c\'>-1</span>s elapsed</div>');
}).listen(8081, function () {
    console.log('Fragment Server listening on port 8081');
});
