
//create the file
var fs=require('fs');

/*fs.writeFile("./a.txt","hello world" ,(data,err)=>{


    if(err){
        console.log(err);
    }
    else{

        console.log("new file is cresated: ");
    }


})


fs.readFile("./a.txt" ,(err,data)=>{        //for reading the data from the files


    if(err){
        console.log(err);
    }
    else{

        console.log("new file is cresated: "+data.toString());
    }


})

fs.appendFile("./a.txt" ,"today is 25 december",(err,data)=>{       //for append the data in the files


    if(err){
        console.log(err);
    }
    else{

        console.log("data will be asppend in the new file which is already created: ");
    }


})

fs.mkdir("newfolder" ,(err,data)=>{     // for making the new folder in direcetry


    if(err){
        console.log(err);
    }
    else{

        console.log("new folder is cresated: ");
    }


})



if(fs.existsSync('newfolder')){         // for deleting the folder if the folder is preasent in the directory

    
    fs.rmdir("newfolder" ,(err,data)=>{


        if(err){
            console.log(err);
        }
        else{
    
            console.log("new directory will be deleted: ");
        }
    
    
    })
}   
/*if(fs.existsSync("./a.txt")){       //for deleting the file
    fs.unlink("./a.txt",(err,data)=>{

        if(err){
            console.log(err);
        }
        else{
            console.log("new files is deletd:");
        }
    })

}*/

fs.writeFile("./t.js","hello world" ,(data,err)=>{      // for creating the js in the new ditrectory


    if(err){
        console.log(err);
    }
    else{

        console.log("new file is cresated: ");
    }


})
fs.readFile("./user.js" ,(err,data)=>{      // for reading the data from the js files


    if(err){
        console.log(err);
    }
    else{

        console.log("new file is cresated: "+data.toString());
    }


})

if(!fs.existsSync("./1st.js")){
    fs.write("./1st.js" ,(err,data)=>{      // for reading the data from the js files


        if(err){
            console.log(err);
        }
        else{
    
            console.log("already preasent: ");
        }
    
    
    })

    
}



