// serve static content via express
// enhance header with Link tag containing js/css refs
const express = require('express');

var app = express();

app.get('/', function(req, res) {
    const css = '<http://localhost:3000/static/css/main.cacbacc7.css>; rel="stylesheet"';
    const js = '<http://localhost:3000/static/js/main.4e81522e.js>; rel="fragment-script"';

    res.writeHead(200, {
        Link: `${css}, ${js}`,
        'Content-Type': 'text/html',
    });

    // res.end('Hello World!');
    res.end('<div id="root"></div>');
});

app.use(express.static(__dirname + '/build'));

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});