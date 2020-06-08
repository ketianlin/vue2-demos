const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const app = http.createServer();

app.on('request', (req, res)=>{
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;

    pathname = pathname == '/' ? '/default.html' : pathname;

    // 将用户的请求路径转换为实际的服务器硬盘路径
    let realPath = path.join(__dirname, 'public', pathname);

    let type = mime.getType(realPath);

    // 读取文件
    fs.readFile(realPath, (err, result)=>{
        // 如果文件读取失败
        if(err != null){
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            });
            res.end('你要访问的页面不存在');
            return;
        }
        res.writeHead(200, {
            'content-type' : type
        })
        res.end(result);
    });
});

app.listen(3000);
console.log('服务器已经启动完毕，端口号是：3000');