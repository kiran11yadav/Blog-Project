import mongoose from "mongoose";
mongoose.set(`strictQuery`,false)
const Connection=async()=>{
   
    try{
        await mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true});
       console.log("connection successfully");   
    
    }catch(err){
        console.log("show error",err);
    }
}

export default Connection;
