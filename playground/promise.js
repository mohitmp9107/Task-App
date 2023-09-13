require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('64fbf52b94caf5bdf867d53d',{age:11}).then((user)=>{
//     console.log(user);
//     return User.count({age:11});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const updateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age});
    if(!user){
        throw new Error('user not found');
    }
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('64fbf52b94caf5bdf867d53e',5).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
