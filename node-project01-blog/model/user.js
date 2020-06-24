// 创建用户集合
// 引入mongose第三方模块
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        minlength:2,
        maxlength:20
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    // 0启用状态 1禁用状态
    state : {
        type : Number,
        default : 0
    }
});

// 创建集合
const User = mongoose.model('User', userSchema);

async function createUser(){
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('111111', salt);
    User.create({
        username : '阿三哥',
        email : 'asan@asan.com',
        password : pass,
        role : 'admin',
        state : 0
    }).then(()=>{console.log('用户创建成功')})
}

// createUser();

module.exports = {
    User
}

