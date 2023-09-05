const {MongoClient,ObjectId} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to db');
    }
    const db = client.db(databaseName);

    db.collection('tasks').deleteMany({
        description:'running',
        description:'training',
    },{
        $set:{
            completed :true
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
})
