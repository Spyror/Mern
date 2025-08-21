import http from 'http';

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-type':'text/plain'});
  res.end("Welcome to node js Server")
})

server.listen(9000,()=>{
  console.log("✅ Server is Running... at 👨 9000 port");
})