// async,await方式 依次读取3个文件
const fs = require('fs');
// 改造现有异步函数api 让其返回promise对象 从而支持异步函数语法
const promisify = require('util').promisify;
// 调用promisify方法改造现有异步API 让其返回promise对象
const readFile = promisify(fs.readFile);

const path = require('path');

async function run(){
    let r1 = await readFile(path.join(__dirname, 'logs/1.log'), 'utf8');
    let r2 = await readFile(path.join(__dirname, 'logs/2.log'), 'utf8');
    let r3 = await readFile(path.join(__dirname, 'logs/3.log'), 'utf8');

    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log('async,await方式，执行3个读取文件方法完毕');
}

run();