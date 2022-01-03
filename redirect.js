

var http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url);
   
if(req.url=='/contactus'){

res.setHeader('Content-Type','text/plain');
res.write("hello from the contact us side")
res.statusCode=200;

}
else {
res.statusCode=301;
res.setHeader('Location','/contactus')

}
res.end();
})

server.listen(30000,()=>{

    console.log("server si reponding: ");
})