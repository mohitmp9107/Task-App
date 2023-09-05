const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
});

// const User = mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         lowercase:true,
//         trim:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid');
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(age){
//             if(age<0){
//                 throw new Error('age must be +ve');
//             }
//         }
//     },
//     password:{
//         type:String,
//         reqired:true,
//         trim:true,
//         minLength:7,
//         validate(value){
//             if(value.includes('password')){
//                 throw new Error('Password can\'t contain "password"');
//             }
//         }
//     }
// });

// const me = new User({
//     name:'  mohit  ',
//     email:' xyz@gmail.com ',
//     password:'password'
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });

const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

const task = new Task({
    description:'wine shopping         ',
    // completed:true
});

task.save().then(()=>{
    console.log(task);
}).catch((err)=>{
    console.log(err);
})
