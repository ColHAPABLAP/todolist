'use strict';
const url = require('url');
const fileSystem = require('fs');
const path = require('path');

module.exports = (fragmentName, fragmentUrl) => (request, response) => {
    const pathname = url.parse(request.url).pathname;
    switch (pathname) {
        case '/fragment.js':
            var filePath = path.join(__dirname, 'static/js/main.f46d4484.js');
            var stat = fileSystem.statSync(filePath);

            response.writeHead(200, {
                'Content-Type': 'application/javascript',
                'Content-Length': stat.size
            });

            var readStream = fileSystem.createReadStream(filePath);
            readStream.pipe(response);

            break;
        case '/fragment.css':
            var filePath = path.join(__dirname, 'static/css/main.cacbacc7.css');
            var stat = fileSystem.statSync(filePath);

            response.writeHead(200, {
                'Content-Type': 'text/css',
                'Content-Length': stat.size
            });

            var readStream = fileSystem.createReadStream(filePath);
            readStream.pipe(response);

            break;
        default:
            response.writeHead(200, {
                'Link': `<${fragmentUrl}/fragment.css>; rel="stylesheet",` +
                `<${fragmentUrl}/fragment.js>; rel="fragment-script"`,
                'Content-Type': 'text/html'
            });
            response.end(`
                <div class="fragment-${fragmentName}">
                    Fragment ${fragmentName}
                </div>
                <div id="root"></div>
            `);
    }
};
