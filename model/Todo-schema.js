import mongoose from "mongoose";

// frontend ko validate krne ke liye 

const todoSchema = mongoose.Schema({
//    payload me data field a rha tha 
    data : {
          type:  String,
          required : true 
   },
//    done field ko maine add kiya jo extra me db me save hoga 
   done:{
    type: Boolean,
    default: false
   },
//    timestamp bhi save kia 
   createdAt:{
    type: Date,
    default: Date.now()
   }

})


// ab ess schema se hme model bannana hai 
// table in mysql called collection in mongodb
const todoModel = mongoose.model('todo', todoSchema);

// collectionname , validationscheme


export default todoModel;