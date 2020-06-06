const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'node.log'),'utf8',(err,doc)=>{
    if(err != null){
        console.log(err);
        return;
    }
    console.log(doc);
})