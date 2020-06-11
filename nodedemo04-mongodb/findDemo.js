const mongoose = require('./connect');

// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const User = mongoose.model('User', userSchema);

// User.find().then(doc=>console.log(doc));

// User.find({name:'张三'})
// .then(doc=>console.log(doc));

// User.findOne({name:'张三'})
// .then(doc=>console.log(doc));

//  匹配大于 小于
// User.find({age:{$gt:20, $lt:50}}).then(doc=>console.log(doc));

//  匹配包含
// User.find({hobbies:{$in:['足球','敲代码']}}).then(doc=>console.log(doc));

// 选择要查询的字段  不想显示哪一个就把哪一个字段前面加-
// User.find({age:{$gt:20, $lt:50}}).select('name email age -_id').then(result=>console.log(result));

// 将数据按照年龄进行排序 降序
// User.find().sort('-age').then(result=>console.log(result));

//  skip 跳过多少条数据  limit 限制查询数量
User.find().sort('-age').skip(4).limit(2).then(result=>console.log(result));

