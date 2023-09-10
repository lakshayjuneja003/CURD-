import User from "../model/userModel.js"
const register = async (req,res)=>{
    try {
        const {username , email , password } = req.body
        if(!username || ! email || !password){
           res.status(400).send("Every Field Is Mandetory")
        }
        const userExists = User.findOne({email})
        if(userExists){
           res.status(400).send("User Already Exists")
        }
        res.status(200).json({
           sucess:true,
           message:"User Registred Sucessfully"
        })
    } catch (error) {
        res.status(400).json({
            sucess:false,
            message:error.message
        })
    }
}
const login = async (req ,res)=>{
try {
         const {email , password } = req.body
        if(!email || ! password ){
            console.log(`All Fields Are Mendatory`)
        }
        const user = User.findOne({email})
        if(!user || user.password !== password){
            res.status(400).json({
                sucess:false,
                message:"Invalid Crediantials"
            })
        }
        res.status(200).json({
            sucess:true,
            data: User
        })

} catch (error) {
    res.status(400).json({
        sucess:false,
        message : error.message
    })    
}
}
export {
    register ,
    login
}