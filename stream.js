var fs=require('fs');
const write=fs.WriteStream("large.js");
const readstream=fs.createReadStream("large2.js");

readstream.on('data',chunk=>{


    console.log(chunk.toString());
    write.write(chunk);
})
readstream.pipe(write);
