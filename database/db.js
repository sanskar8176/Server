// set the mongodb first by visit cloud.mongodb.com
// login kro cluster bnao user bnao password save kro ip address add kro 
// connect me jake connection string copy then mongodb compass me paste aur user and password diya to connect hua
// aise hi db.js me bhi krkna hai


// express se mongodb ko connect krne k lie mongoose ka use 

import mongoose from 'mongoose';

const Connection = async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@todo-app.bjgjo9s.mongodb.net/?retryWrites=true&w=majority`
    
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
    
    // having success
    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully');
    })
      // having disconnected
    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })
    // having error 
    mongoose.connection.on('error',(error)=>{
        console.log('error while connecting with database', error.message);
    })
}

export default Connection;