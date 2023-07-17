const mongoose = require("mongoose")


const boardSchema = mongoose.Schema({


    _id: Number,
    name: String,
    tasks: [{
        _id: Number,
        title: String,
        description: String,
        status: { type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo' },
        subtask: [{
            _id: Number,
            title: String,
            isCompleted: Boolean
        }]
    }]

})

const boardModel = mongoose.model('data',boardSchema)



module.exports = {
    boardModel
}