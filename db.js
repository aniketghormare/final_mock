const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://aniket:ghormare@cluster0.qr4dpak.mongodb.net/Board?retryWrites=true&w=majority")



module.exports={
    connection
}