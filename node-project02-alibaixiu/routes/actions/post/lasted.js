// 文章模块
const { Post } = require('../../../model/Post');


module.exports = async (req, res) => {
	const posts = await Post.find({state:1}).sort('-createAt').populate('author', '-password').populate('category').limit(5)
	// 响应
	res.send(posts);
}