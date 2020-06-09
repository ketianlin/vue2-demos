// 创建数据库连接以及插入数据

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useUnifiedTopology: true})
    // 连接成功
    .then(()=>console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
	author: String,
	isPublished: Boolean
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema);

// 创建文档 方式1
// const course = new Course({
//     name: '论程序员的自我修养',
// 	author: '阿三哥',
// 	isPublished: true
// });
// 将文档插入到数据库中
// course.save();

// 创建文档 方式2
// Course.create({
//     name: '阿三的辟邪剑法',
// 	author: '阿三哥的哥',
// 	isPublished: true
// }, (err, doc)=>{
//     console.log(err);
//     console.log(doc);
// });

// 创建文档 方式3
Course.create({
    name: '阿四的辟邪剑法',
	author: '阿四哥的哥',
	isPublished: true
}).then(doc=>console.log(doc))
.catch(err=>console.log(err));

// 新增环境变量
// mongoimport –d 数据库名称 –c 集合名称 –file 要导入的数据文件
// 找到mongodb数据库的安装目录，将安装目录下的bin目录放置在环境变量中。

// 导入数据库
// mongoimport -d playground -c users --file .\user.json