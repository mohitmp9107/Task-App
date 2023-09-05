const express = require('express');

const app = express();
const port = (process.env.port || 3000);

app.post('/users',(req,res)=>{
    console.log(res.body);
    res.send('testing');
})

app.listen(port,()=>{
    console.log('server is up and running ' + port);
})


