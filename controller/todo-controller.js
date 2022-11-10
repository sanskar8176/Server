import todoModel from "../model/Todo-schema.js";


export const addTodo = async(req, res)=>{
    // console.log(req.body);
   
   try{

       const newTodo = await todoModel.create({
           data: req.body.data,
           createdAt: Date.now() 
        })
        // ye new object dega esko db me save karana hai 
        
        // save krna db me 
        await newTodo.save(); 
        // ye cloud me chl rhi esliye async req hai to response await hoga 
        
        // ab frontend me response bhejna hai 
        return res.status(200).json(newTodo);
    }
        
    // kyuki mongodb external entity hai esliye error ke chances hai esliye try catch use 
    catch(e){
        return res.status(500).json(e.message);
    }

}


// esme database me store krnna hai but pehle validate krna pdega ki frontend se ane wala data valid hai 
// eske lie schema likhna hoga jo model me hoga


export const getAllTodos = async(req, res) => {
    try{
        // find all hai ye  nut condition de skte hai {} ke under key: val krk
        const todos = await todoModel.find({}).sort({'createdAt':-1});
        // esse sort in desc order of time, new at first 
        
        return res.status(200).json(todos);
        
    }
    catch(e){
        return res.status(500).json(e.message);
    }
}


export const toggleTodoDone = async(req, res) => {
    try{
        // find find with that id then update it then save in db
        const todoRef = await todoModel.findById(req.params.id);
      
        const todo = await todoModel.findOneAndUpdate(
            {_id: req.params.id},
            {done: !todoRef.done} // done ko toggle krk save
        )    
            // esme save likhne ki need nhi

        return res.status(200).json(todo);
        
    }
    catch(e){
        return res.status(500).json(e.message);
    }
}


export const updateTodoDone = async(req, res) => {
    try{
        // find find with that id then update it then save in db
      
        await todoModel.findOneAndUpdate(
            {_id: req.params.id},
            {data: req.body.data} 
        )    
       // ab update ho jaega to updated object fetch krna hai 

        const todo = await todoModel.findById(req.params.id);  
        

        return res.status(200).json(todo);
        
    }
    catch(e){
        return res.status(500).json(e.message);
    }
}


export const deleteTodoDone = async(req, res) => {
    try{
    
        const todo = await todoModel.findByIdAndDelete(req.params.id)  //_id ko target kr rhe mongodb ki   

        return res.status(200).json(todo);
        
    }
    catch(e){
        return res.status(500).json(e.message);
    }
}

