const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'node.log'), '写入日志成功123', (err, doc)=>{
    if(err != null){
        console.log(err);
        return;
    }
    console.log('写入日志成功2222');
})