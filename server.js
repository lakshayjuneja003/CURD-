import app from "./app.js"
import dotenv, { config } from "dotenv"
config()
import ConnectToDb from "./config/db.config.js";

 const PORT = process.env.PORT || 3000;

app.listen(PORT, async()=>{
     await ConnectToDb()
     console.log(`Server is running at port ${PORT}`);
})

