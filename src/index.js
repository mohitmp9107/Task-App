const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./db/mongoose');

const app = express();
const port = (process.env.port || 3000);


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port,()=>{
    console.log('server is up and running ' + port);
})

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async()=>{
//     // const task = await Task.findById('65059bceab11f3c7681a46c2');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('65059b7d28ba37c5f4ec20e0');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }
// main()