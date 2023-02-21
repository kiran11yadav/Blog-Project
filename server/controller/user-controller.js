import user from "../model/user.js";


const signupUser= async(request,response)=>{
try{
    const User= request.body;
     
    const newUser= new User(user)
    await newUser.save();
    return response.status(200).json({msg:'signup successful'})

}catch(err){
    return response.status(500).json({msg:'Err while signup the user'})

}}
export default signupUser;