import mongoose from "mongoose";

const ConnectToDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL|| "mongodb://0.0.0.0/curd")
        .then((conn)=>{
           console.log(`DB CONNECTED SUCCESFULLY TO ${conn.connection.host}`)
        })
        .catch((e)=>{
           console.log(e);
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

export default ConnectToDb;