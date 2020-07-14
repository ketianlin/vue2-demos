const { User } = require('../../model/user');

module.exports = async(req, res) => {
    // 获取到地址栏中的id参数
    const { id, message } = req.query;
    // 如果当前传递了id参数
    if(id){
        // 修改操作
        let user = await User.findOne({_id:id});

        // 渲染用户编辑页面(修改)
        res.render('admin/user-edit', {
            message,
            user:user,
            link:'/admin/user-modify?id='+id,
            button:'修改'
        })
    }else{
        // res.send('fuck')
        // 添加操作
		res.render('admin/user-edit', {
			message,
			link: '/admin/user-edit',
			button: '添加'
		});
    }
}