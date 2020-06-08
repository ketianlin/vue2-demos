const http = require('http');
const url = require('url');
const app = http.createServer();

app.on('request', (req, res)=>{
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    let {query, pathname} = url.parse(req.url,true);
    if(pathname == '/' || pathname == '/index'){
        console.log(query.a);
        res.end('<h1>欢迎来到首页'+req.method+'</h1>')
    }else if(pathname == '/list'){
        console.log(query.c);
        res.end('<h1>欢迎来到列表页面</h1>')
    }else{
        res.end('not found')
    }
    res.end(res.method);
});

app.listen(3000);
console.log('服务器已经启动');