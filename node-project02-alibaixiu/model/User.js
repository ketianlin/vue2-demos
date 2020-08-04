// 数据库操作
const mongoose = require('mongoose');
// 模型规则类
const { Schema } = mongoose;
// 对象规则验证
const Joi = require('@hapi/joi');
// hash密码
const bcrypt = require('bcrypt');

// 用户集合规则
const UserSchema = new Schema({
	// 昵称
	nickName: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 30
	},
	// 邮件
	email: {
		type: String,
		required: true,
		unique: true
	},
	// 密码
	password: {
		type: String,
		required: true
	},
	// 角色
	role: {
		type: String,
		// admin 超级管理员 normal 普通用户
		default: 'normal',
		enum: ['admin', 'normal']
	},
	// 头像
	avatar: {
		type: String,
		default: null
	},
	// 创建时间
	createTime: {
		type: Date,
		default: Date.now
	},
	// 状态
	status: {
		// 0 未激活 1 激活
		type: Number,
		required: true,
		default: 1
	}
}, {versionKey: false});

// 用户集合类
const User = mongoose.model('User', UserSchema);

// 注册数据格式校验
const validateXXX = async (user) => {
	// 定义对象验证规则
	const schema = Joi.object({
		nickName: Joi.string().min(2).max(30).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).required().error(new Error('邮箱或密码错误')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).error(new Error('邮箱或密码错误')),
		status: Joi.number().valid(0, 1),
		role: Joi.string().valid('normal', 'admin')
	});
	// 实施验证
	try {
        // 实施验证
        await schema.validateAsync(user)
    } catch (e) {
        console.log(e.message);
        return false;
	}
	return true;
}

// 登录数据格式校验
const validateLogin = async (user) => {
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
        console.log(e.message);
        return false;
    }
	return true;
}

User.findOne({'email': 'asange@qq.cn'}).then(async result => {
	if (result == null) {
		// 生成盐
		const salt = await bcrypt.genSalt(10);
		// 使用盐对密码进行加密
		const password = await bcrypt.hash('123456', salt);

		const user = await User.create({
			nickName: '阿三哥',
			email: 'asange@qq.cn',
			password: password,
			role: 'admin',
			avatar: null,
			createTime: new Date,
			status: 1
        });
	}
})

async function createUser(){
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('111111', salt);
    User.create({
        nickName: '阿三哥',
        email : 'asange@asan.com',
        password : pass,
        role : 'admin',
        createTime: new Date,
		status: 1
    }).then(()=>{console.log('用户创建成功')})
}


// createUser();


// 导出对象
module.exports = {
	User,
	validateLogin,
	validateXXX
	
};