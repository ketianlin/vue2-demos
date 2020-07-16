module.exports = (req, res) => {
    // 标识 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';
    // 获取到地址栏中的id参数
    const { message } = req.query;
    res.render('admin/article-edit',{
        message
    });
}