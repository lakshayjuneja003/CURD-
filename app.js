import Express from "express"
import cors from "cors"
import userRoute from "./routes/user.routes.js"


const app = Express()
// Express Middlewares
app.use(Express.json()) // to get data in form of json
app.use(Express.urlencoded({
    extended:true
}))

app.use(cors)

app.use("/", userRoute)
export default app;