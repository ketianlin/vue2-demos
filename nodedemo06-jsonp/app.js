// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 接收post请求参数
const formidable = require('formidable');
// 实现session功能
const session = require('express-session');
// 创建web服务器
const app = express();
// 接收post请求参数
// 实现session功能
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));


app.get('/better', (req, res)=>{
    // console.log(req.query)
    setTimeout(()=>{
        let result = {name: '阿三哥', age : 30, d : new Date()};
        Object.assign(result, req.query);
        res.jsonp(result);
    }, 1000)
    // res.jsonp({name: 'lisi', age: 20});
})

// 监听端口
app.listen(3001);
// 控制台提示输出
console.log('端口：3001 服务器启动成功');