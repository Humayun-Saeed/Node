
const { resolveSoa } = require('dns');
var http=require('http');
var url=require('url');
var a= 'http://localhost:8080/default.htm?year=2017&month=february';

const server=http.createServer((req,res)=>{
res.setHeader("Content-Type","text/html");
var q=url.parse(a,true);
res.write(q.hostname);  //it will retun the name of the loacla host name
res.write(q.path);      // thisn will return the path of the module
res.write(q.search);
var data=q.query;
res.write(data.date)

})
server.listen(300,()=>{
console.log("server isn runnign at the moment: ");

})
