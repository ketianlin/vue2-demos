// 用于创建网站服务器的模块
const http = require('http');
// app对象就是网站服务器对象
const app = http.createServer();
// 处理请求参数模块
const querystring = require('querystring');
app.on('request', (req, res)=>{
    // post参数是通过事件的方式接受的
	// data 当请求参数传递的时候出发data事件
    // end 当参数传递完成的时候出发end事件
    
    let params = '';
    req.on('data', param=>params+=param);
    req.on('end', ()=>console.log(querystring.parse(params)));
    // res.writeHead({
    //     'context-type': 'text/html;charset=utf8'
    // })
    res.end('接收到post请求成功');
});

app.listen(3000);
console.log('服务器已经启动完毕，端口号是：3000');