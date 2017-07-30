// serve static content via express
// enhance header with Link tag containing js/css refs
const express = require('express');

var app = express();

const css = '<http://localhost:3000/static/css/main.cacbacc7.css>; rel="stylesheet"';
const js = '<http://localhost:3000/static/js/main.4e81522e.js>; rel="fragment-script"';

app.use(express.static(__dirname + '/build', {
    setHeaders: function (res, path) {
        if (path.indexOf("index.html") !== -1) {
            res.setHeader('Link', `${css}, ${js}`)
        }
    }
}));

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});