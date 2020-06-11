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

User.create({
	name: 'aaa',
	age: 34,
	email: 'eee@a22aa.com',
	password: '112212',
	hobbies: ['bdb22','cd22c']
})
return

// 查找到一条文档并且删除
// 返回删除的文档
// 如何查询条件匹配了多个文档 那么将会删除第一个匹配的文档
User.findOneAndDelete({name:'aaa'}).then(result=>console.log(result));

// 删除多条文档
// User.deleteMany({name:'aaa'}).then(result=>console.log(result));