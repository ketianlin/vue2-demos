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

// 更新单个
// User.updateOne({name:'aaa'},{name:'李狗蛋'}).then(result=>console.log(result));

// 更新多个
User.updateMany({name:'aaa'}, {age:60}).then(result=>console.log(result));