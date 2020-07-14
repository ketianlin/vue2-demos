// 将文章集合的构造函数导入到当前文件中
const { Article } = require('../../model/article');

module.exports = async (req, res) => {
    // 标识 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';

    let articles = await Article.find({}).populate('author');
    res.render('admin/article', {
        articles
    });
}