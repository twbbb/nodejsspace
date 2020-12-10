const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function(req,rsp){
  // console.log(req.url)
  // const urlformat =  url.format(req.url);
  const urlformat =  url.parse(req.url);
  console.log(urlformat);

  if('/favicon.ico'==urlformat.pathname){
    rsp.writeHead(200);
    rsp.end();
    return;
  }

  if('/test'==urlformat.pathname){
    
   rsp.writeHead(200); 
    fs.createReadStream(__filename).pipe(rsp);
  }
}).listen(3000);