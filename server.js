
const http = require('http');
const fs = require('fs'); 

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('content-type', 'text/html');
    // send an html file

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;
        default:
           path += '404.html';
           res.statusCode = 404;
           break;
        
    };

    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });


});

server.listen(3000, 'localhost', () => {
    console.log('listening to port 3000')
});