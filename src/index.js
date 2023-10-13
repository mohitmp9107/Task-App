const app = require('./app');
const port = (process.env.port || PORT);

app.listen(port,()=>{
    console.log('server is up and running ' + port);
})