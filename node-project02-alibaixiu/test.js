const Joi = require('@hapi/joi');


// 注册数据格式校验
const validateUser = async (user) => {
	// 定义对象验证规则
	const schema = Joi.object({
		email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).required().error(new Error('邮箱或密码错误')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).error(new Error('邮箱或密码错误'))
	});
	// 实施验证
	try {
        // 实施验证
        await schema.validateAsync(user)
    } catch (e) {
        throw(e);
	}
	// return true;
}

async function xxd() {
    try {
        await validateUser({email:"1",password:"1"})
    } catch (err) {
        // 验证没有通过
        // console.log(e.message)
        throw(err)
        // res.send(e.message)
        // 重定向回用户添加页面
		// return res.redirect(`/admin/user-edit?message=${e.message}`);
        // JSON.stringify() 将对象数据类型转换为字符串数据类型
        // return next(JSON.stringify({path: '/admin/user-edit', message: e.message}))
    }
    return true;
}
const {error}= xxd();