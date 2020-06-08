// 测试回调地狱
const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'logs/1.log'), 'utf8', (err, result)=>{
    console.log(result);
    fs.readFile(path.join(__dirname, 'logs/2.log'), 'utf8', (err, result)=>{
        console.log(result);
        fs.readFile(path.join(__dirname, 'logs/3.log'), 'utf8', (err, result)=>{
            console.log(result);
            console.log('所有文件读取完毕');
        });
    });
});