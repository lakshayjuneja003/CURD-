import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        maxLength:[20,"name must be less than 20 characters"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})
const User = mongoose.model("user",userSchema)
export default User;