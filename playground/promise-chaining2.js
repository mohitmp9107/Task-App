require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('64fbf8031ec9e9bf98277dcf').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:false});
// }).then((result)=>{
//     console.log('Incompleted tasks ' + result);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id);
    if(!task){
        throw new Error('task can not be found'); 
    }
    const count = await Task.countDocuments({completed:false});
    return count;
}
deleteTaskAndCount('64f77fdac3e57660404f9140').then((count)=>{
    console.log('incompleted tasks ' ,count);
}).catch((e)=>{
    console.log(e);
})