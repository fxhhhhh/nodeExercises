const { error } = require('console');
const {readFile,writeFile} = require('fs');


readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        } 
        console.log(result);
    const second = result;
    console.log(second);
    writeFile('./content/result-async.txt',`here is the res: ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        } 
        console.log(result);
    })
})
    
});
