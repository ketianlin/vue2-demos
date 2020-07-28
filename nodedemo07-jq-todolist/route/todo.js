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

// 将todo案例路由作为模块成员进行导出
module.exports = todoRouter;