const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    title : {
        type: String,
        required : true 
    },
    taskStatus : {
        type : String,
        required : true,
    }
}, {timestamps : true})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task