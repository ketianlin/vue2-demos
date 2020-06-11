const mongoose = require('./connect');

const postSchema = new mongoose.Schema({
    title:{
        type : String,
        // required : true
        // 必须字段
        required : [true, '请传入文章标题'],
        // 字符串最小长度
        minlength:[2, '文章标题长度不能小于2'],
        // 字符串最大长度
        maxlength:[5,'文章标题长度不能大于5'],
        // 去除字符串两杯空格
        trim:true
    },
    age : {
        type : Number,
        min:18,
        max:100
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        enum:{
            values:['javascript', 'node.js', 'vue', 'css', 'html5'],
            message:'分类名称要在一定的范围内才可以'
        }
    },
    author:{
        type:String,
        validate:{
            validator:v=>{
                return v && v.length > 4
            },
            message : '传入的值不符合验证规则'
        }
    }
});

const Post = mongoose.model('Post', postSchema);

Post.create({title:' dd',age:20, category:'vue3', author:'bat'}).then(result=>console.log(result)).catch(({errors})=>{
    for(let attr in errors){
        console.log(attr, errors[attr]['message'])
    }
});