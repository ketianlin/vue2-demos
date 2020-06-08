// promise第一个测试
const fs = require('fs');
const path = require('path');

let promise = new Promise((resolve, reject)=>{
    fs.readFile(path.join(__dirname, 'logs/11.log'), 'utf8', (err, result)=>{
        if(err != null){
            reject(err);
        }else{
            resolve(result);
        }
    });
});

promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});