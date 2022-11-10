// const express= require("express"); ye purana tarika
import express from 'express';      //package.json me type module krna hai

// esme .js compulsory
import Connection from './database/db.js';

import dotenv from 'dotenv';

import cors from 'cors';

import Routes from './routes/route.js';

// initialize dotenv 
dotenv.config();


// intialize express 
const app = express();
app.use(cors());

// cors - cross origin resource sharing 
// backend and frontend differnt server pr hai to sharing nhi kr skte 
// eske lie backend me cors enable krna pdega
// package -  npm i cors

// express se routing krege in route.js

const PORT = process.env.PORT || 4000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// stabilizing connection
Connection(username,password);

// creating server of express 
app.listen(PORT,()=>console.log(`your server is running on port ${PORT}`))

// start ke liye package.json me script me start "node index.js" or if using nodemon then "nodemon index.js" likho

// npm install --save-dev nodemon //to add it as dev dependency



// post api ki body json me hoti hai esliye parse kiya
app.use(express.json({extended:true}));

app.use(express.urlencoded({extended:true}));

// bodyparser expressjs me hi a gya hai no need to install externally


// parse krne k baad use krna hai 
// created routes 
app.use('/', Routes);