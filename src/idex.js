var http = require("http");
var url = require('url')
var {info, error} = require('./modules/my-log');
var {countries} = require ('countries-list');


var server = http.createServer(function(request, response){
    var parsed = url.parse(request.url);
    console.log("parsed:", parsed);

    var pathname = parsed.pathname;

        if(pathname=='/'){
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.write("<html><body><p>Hello</p></body></html>");
            response.end();
        }
        else if(pathname=='/exit'){
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.write("<html><body><p>GoodBye</p></body></html>");
            response.end();
        }
        else if(pathname=='/country'){
            response.writeHead(200,{'Content-Type': 'application/json'})
            response.write(JSON.stringify(countries.MX));
            response.end();
        }
        else if(pathname=='/info'){
            var result=info(pathname)
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.write(result);
            response.end();
        }
        else if(pathname=='/error'){
            var result = error(pathname);
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.write(result);
            response.end();
        }
        else{
            response.writeHead(404,{'Content-Type': 'text/html'})
            response.write("<html><body><p>Not FOUND</p></body></html>");
            response.end();
        }
});

server.listen(4000);
console.log('running on 4000') 