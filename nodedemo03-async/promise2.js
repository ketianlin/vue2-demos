// promise 依次读取3个文件
const fs = require('fs');
const path = require('path');

function p1(){
    return new Promise((resolve, reject)=>{
        fs.readFile(path.join(__dirname, 'logs/1.log'), 'utf8', (err, result)=>{
            resolve(result);
        });
    });
}

function p2(){
    return new Promise((resolve, reject)=>{
        fs.readFile(path.join(__dirname, 'logs/2.log'), 'utf8', (err, result)=>{
            resolve(result);
        });
    });
}

function p3(){
    return new Promise((resolve, reject)=>{
        fs.readFile(path.join(__dirname, 'logs/3.log'), 'utf8', (err, result)=>{
            resolve(result);
        });
    });
}

p1().then(result=>{
    console.log(result);
    return p2();
}).then(result=>{
    console.log(result);
    return p3();
}).then(result=>{
    console.log(result);
    console.log('promise方式，所有文件读取完毕');
})