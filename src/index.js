const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
// const { TopologyDescriptionChangedEvent } = require('mongodb');
require('./db/mongoose');

const app = express();
const port = (process.env.port || 3000);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port,()=>{
    console.log('server is up and running ' + port);
})