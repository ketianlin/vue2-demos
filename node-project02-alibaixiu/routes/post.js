const post = require('express').Router();
// 添加文章信息
post.post('/', require('./actions/post/create'));

// 查询所有文章
post.get('/', require('./actions/post/find'));

// 查询文章数量
post.get('/count', require(('./actions/post/count')));

// 根据文章id获取文章信息
post.get('/:id', require('./actions/post/findById'));

// 根据ID修改文章
post.put('/:id', require('./actions/post/findByIdAndUpdate'));

// 根据ID删除文章
post.delete('/:id', require('./actions/post/findByIdAndDelete'));

module.exports = post;