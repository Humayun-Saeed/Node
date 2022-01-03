
var http=require('http');
var fs=require('fs');
var port=30000;
var host='localhost';
var route="req.url";
const server=http.createServer((req,res)=>{
//console.log("hello from the server side");
//console.log(`a request recived from the url: ",${req.url}`);
//console.log(`a method ",${req.method}`);
res.setHeader('Content-Type' ,'text/html')
//res.write("hello sg from the othetr  side: ");
//res.write("hello ,"+req.url );
//res.end();
fs.readFile('./index.html',(err,data)=>{

    if(err){
        console.log("error preasent");
    }
    else
    {
        res.write(data);
        res.end();
    }
})
})
server.listen(port,()=>{
    console.log("server is responding:");
})