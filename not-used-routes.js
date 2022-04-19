
const file = require('fs');

const requestHandler = (req, res, next) => {
    let url = req.url;
    let method = req.method;

    if(req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title>/n</head>');
        res.write('<body><form action="/message" method="POST" >My first page');
        res.write('<input type="text" name="message" /><button type="submit">Send</button>')
        res.write('</form></body></html>')
        return res.end();
    }
    
    if(url === '/message' && method=='POST') {
        const body = [];
        // Event listener
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            file.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })

    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Hello from my node server</h1></body>');
    res.write('</html>')
    res.end();
}

// through exports we can only read for write we have other functions
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};