// 文章模块
const { Post } = require('../../../model/Post');
require('mongoose-query-random');

module.exports = async (req, res) => {
	Post.find().random(5, true, (err, docs)=>{
        // 响应
        res.send(docs);
    });
}