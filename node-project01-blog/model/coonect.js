// 引入mongoose第三方模块
const mongoose = require('mongoose');
// 导入config模块
const config = require('config');

const {user, pwd, host, port, name} = config.get('db')
// 数据库连接
mongoose.connect(`mongodb://${user}:${pwd}@${host}:${port}/${name}`, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>console.log('数据库连接成功'))
    .catch(()=>console.log('数据库连接失败'));