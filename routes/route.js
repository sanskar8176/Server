import express from 'express';

import {addTodo, getAllTodos, toggleTodoDone, updateTodoDone, deleteTodoDone} from '../controller/todo-controller.js';

// todo end point ke hit hone pr database me save krne ke lie

const route = express.Router();


//end point and callback
// callback having two args request and response 
// req comes from frontend part and having info regards type payload etc
route.post('/todos', addTodo)

    // console.log(req.body);
    // ye undefined dega kyuki post api ki body ko handle krna esse nhi ata
    // yha json format me ati hai body  esliye server me app.use(json())and urlencoded kiya
    

//    callback func ko controller me likhna best practice


// actions se ye url hit krega to eska callback func chlega

route.get('/todos', getAllTodos);



route.get('/todos/:id', toggleTodoDone);
// :id  ka mtlb variable hota hai 




route.put('/todos/:id', updateTodoDone);


route.delete('/todos/:id', deleteTodoDone);

export default route;