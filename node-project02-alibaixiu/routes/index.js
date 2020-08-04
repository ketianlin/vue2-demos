// 路由集合
module.exports = app => {
    // 用户
    app.use('/users', require('./user'));

    // 其他
	// 用户登录
    app.post('/login', require('./actions/other/login'));
    // 用户退出
	app.post('/logout', require('./actions/other/logout'));
    // 判断用户是否登录
	app.get('/login/status', require('./actions/other/loginStatus'));
};