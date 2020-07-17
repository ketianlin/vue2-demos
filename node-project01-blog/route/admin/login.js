// 导入用户集合构造函数
const {User} = require('../../model/user');

const bcrypt = require('bcrypt');

module.exports = async (req, res)=>{
    // 接收请求参数
    const {email, password} = req.body;
    // 如果用户没有输入邮件地址
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', {msg:'邮件地址或者密码错误'})
    }
    // 根据邮箱地址查询用户信息
	// 如果查询到了用户 user变量的值是对象类型 对象中存储的是用户信息
    // 如果没有查询到用户 user变量为空
    let user = await User.findOne({email});
    
    if (user) {
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            // 将用户名存储在请求对象中
			req.session.username = user.username;
			// 将用户角色存储在session对象中
            req.session.role = user.role;
            
            req.app.locals.userInfo = user;
            // 重定向到用户列表页面
            res.redirect('/admin/user');
            // return res.send('登录成功');
        }
    }
    res.status(400).render('admin/error', {msg:'邮件地址或者密码错误'})
}