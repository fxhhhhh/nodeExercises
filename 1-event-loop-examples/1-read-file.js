const {readFile,writeFile} = require('fs');

console.log("hi");
readFile('./content/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log("bye");
})
console.log("wait a moment");