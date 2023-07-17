const express=require("express")
const { boardModel } = require("../modal/Board.modal")


const BoardRoute=express.Router()



BoardRoute.post("/add",async(req,res)=>{
        try {
            const user=new boardModel(req.body)
            await user.save()
            res.json({msg:"Board added"})
        } catch (error) {
            res.json({error})
        }
})

BoardRoute.get("/",async(req,res)=>{
    try {
        const user=await boardModel.find()
        res.json(user)
    } catch (error) {
        res.json({error})
    }
})


module.exports={
    BoardRoute
}