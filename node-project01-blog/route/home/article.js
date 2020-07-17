const { Article } = require('../../model/article');

module.exports = async (req, res)=>{
    // 接收客户端传递过来的文章id值
    let id = req.query.id;
    // 根据id查询文章详细信息
    let article = await Article.findOne({_id:id}).populate('author');

    res.render('home/article.art', {
        article
    });
}