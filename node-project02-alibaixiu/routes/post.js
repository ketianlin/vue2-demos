const post = require('express').Router();
// 添加文章信息
post.post('/', require('./actions/post/create'));

module.exports = post;