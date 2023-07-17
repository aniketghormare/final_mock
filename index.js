const express=require("express")
const { connection } = require("./db")
const { BoardRoute } = require("./routes/Borad.routes")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
app.use("/board",BoardRoute)
app.listen(4500,async()=>{
    try {
        await connection
        console.log("server connected 4500")
    } catch (error) {
        console.log(error)
    }
   
})