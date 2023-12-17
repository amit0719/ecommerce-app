import dotenv from "dotenv"
import express from "express"; 
import connectDB from "./utils/db";


dotenv.config()

//database config

//connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());





app.get("/",(req, res)=>{
    res.send('Hello world')
})

app.listen(port,()=>{
    console.log('server running on port', port)
})