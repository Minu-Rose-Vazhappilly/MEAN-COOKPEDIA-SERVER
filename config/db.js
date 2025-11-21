const mongoose = require('mongoose')
const connectionString = process.env.DBCONNECTION

mongoose.connect(connectionString).then(res=>{
    console.log("database Connected Successfully");
    
}).catch(err=>{
    console.log("DB CONNECTION FAILED");
    console.log(err);
    
    
})