// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 导入mongoose模块
const mongoose = require('mongoose');
// 导入bodyParser模块
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 处理json请求参数
app.use(bodyParser.json()); 
// 处理post请求参数
app.use(bodyParser.urlencoded({extended: false}));
// 数据库连接
mongoose.connect('mongodb://itcast:itcast@localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true })

// 导入todo路由案例
const todoRouter = require('./route/todo');
// 当客户端的请求路径以/todo开头时
app.use('/todo', todoRouter);


// 获取用户列表信息
app.get('/users', (req, res) => {
    setTimeout(function(){
        res.send([{title:'fuck',content:'xxoo,fuck都可看到'},{title:'shit',content:'ooxx,shit都可看到'}]);
    }, 3000);
});

// 获取某一个用户具体信息的路由
app.get('/users/:id', (req, res) => {
	setTimeout(function(){
        // 获取客户端传递过来的用户id
        const id = req.params.id;
        res.send({id:id,title:'获取某一个用户具体信息的路由',content:`当前我们是在获取id为${id}用户信息`});
    },3000);
});

// post添加用户信息
app.post('/users', (req, res) => {
    setTimeout(function(){
        req.body['flag'] = 'post添加用户信息'+new Date();
        res.send(req.body);
    },3000)
});


// 删除某一个用户
app.delete('/users/:id', (req, res) => {
    setTimeout(function(){
        // 获取客户端传递过来的用户id
        const id = req.params.id;
        res.send({id:id,msg:`当前我们是在删除id为${id}用户信息`});
    },3000)
});

// 修改某一个用户的信息
app.put('/users/:id', (req, res) => {
    setTimeout(function(){
        // 获取客户端传递过来的用户id
        const id = req.params.id;
        req.body['flag'] = 'put方式修改用户('+id+')信息'+new Date();
        res.send(req.body);
    },3000)
});

app.get('/xml', (req, res) => {
	res.header('content-type', 'text/xml');
	res.send('<message><title>消息标题</title><content>消息内容</content></message>')
});

app.listen(3005);
console.log('3005端口启动完毕');