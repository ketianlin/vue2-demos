// 关联查询
const mongoose = require('./connect');
// // 文章集合规则
// const postSchema = new mongoose.Schema({
//     title:String,
//     auther:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'User'
//     }
// });
// // 文章集合
// const Post = mongoose.model('Post', postSchema);
// // 创建文章
// // Post.create({title:'这个是测试关联集合查询的文章标题', auther:'5c09f236aeb04b22f8460967'})
// // .then(result=>console.log(result));

// // 关联查询
// Post.find().populate('auther').then(result=>console.log(result));

// 用户集合规则
const userSchema = new mongoose.Schema({
	
});
// 文章集合规则
const postSchema = new mongoose.Schema({
	title: {
		type: String
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
// 文章集合
const Post = mongoose.model('Post', postSchema);
// 用户集合
const User = mongoose.model('User', userSchema);
Post.create({titile: '12dddd3', author: '5c09f236aeb04b22f8460967'}).then(result => console.log(result));

Post.find().populate('author').then(result => console.log(result))