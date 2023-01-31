const mongoose = require("mongoose")


const todoSchema = mongoose.Schema({
    todo : String,

    create_at : {
        type : Date,
        default : Date.now()
    }

})

const TodoModel = mongoose.model("todos",todoSchema)

module.exports = TodoModel