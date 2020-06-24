// 引入mongoose第三方模块
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>console.log('数据库连接成功'))
    .catch(()=>console.log('数据库连接失败'));