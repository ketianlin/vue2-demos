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

// 拦截所有请求
app.use((req, res, next) => {
    // 1.允许哪些客户端访问我
	// * 代表允许所有的客户端访问我
	// 注意：如果跨域请求中涉及到cookie信息传递，值不可以为*号 比如是具体的域名信息
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // 2.允许客户端使用哪些请求方法访问我
    res.header('Access-Control-Allow-Methods', 'get,post');
    // 允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    next();
})


app.get('/better', (req, res)=>{
    // console.log(req.query)
    setTimeout(()=>{
        let result = {name: '阿三哥', age : 30, d : new Date()};
        Object.assign(result, req.query);
        res.jsonp(result);
    }, 1000)
    // res.jsonp({name: 'lisi', age: 20});
})

app.get('/cors', (req, res)=>{
    res.send('来自3001的cors方式解决跨域问题');
});

app.get('/servercors', (req, res)=>{
    res.send('来自3000的服务器端远程访问方式解决跨域问题');
});

// 监听端口
app.listen(3001);
// 控制台提示输出
console.log('端口：3001 服务器启动成功');