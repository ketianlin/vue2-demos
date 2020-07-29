// 引入express框架
const express = require('express');
// 工具库
const _ = require('lodash');
// 对象校验
const Joi = require('joi');
// 创建todo案例路由
const todoRouter = express.Router();
// 导入todo集合构造函数
const Task = require('../model/task');

// 获取任务列表
todoRouter.get('/task', async(req, res)=>{
    const task = await Task.find();
    // 响应
    res.send(task);
})

// 添加任务
todoRouter.post('/addTask', async (req, res) => {
	// 接收客户端传递过来的任务名称
    const { title } = req.body;
    console.log(Joi)
	// 验证规则
	const schema = {
		title: Joi.string().required().min(2).max(30)
	};
	// 验证客户端传递过来的请求参数 
    // const { error } = Joi.validate(req.body, schema);
    // console.log(error);
	// // 验证失败
	// if (error) {
	// 	// 将错误信息响应给客户端
	// 	return res.status(400).send({message: error.details[0].message})
	// }
	// 创建任务实例
	const task = new Task({title: title, completed: false});
	// 执行插入操作
	await task.save();
	// 响应
	setTimeout(() => {
		res.send(task);
	}, 2000)
});

// 删除任务
todoRouter.get('/deleteTask', async (req, res)=>{
    const _id = req.query._id;
    // 验证规则
    const schema = {
        _id: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).error(new Error('_id不能为空'))
    }

    // // 验证客户端传递过来的请求参数 
    // const { error } = Joi.validate(req.query, schema);
    // // 验证失败
	// if (error) {
	// 	// 将错误信息响应给客户端
	// 	return res.status(400).send({message: error.details[0].message})
	// }
    // 删除任务
    const task = await Task.findOneAndDelete({_id: _id});
    // 响应
	res.send(task);
})

// 修改任务
todoRouter.post('/modifyTask', async(req, res)=>{
    // 执行修改操作
	const task = await Task.findOneAndUpdate({_id: req.body._id}, _.pick(req.body, ['title', 'completed']),{new: true})
	// 响应
	res.send(task);
})

// 将todo案例路由作为模块成员进行导出
module.exports = todoRouter;