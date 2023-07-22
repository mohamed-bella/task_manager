const express = require('express')
const TaskController = require('../controllers/task')
const task = express.Router();


// home page
task.get('/',TaskController.getHomePage)
// add a new task 
task.post('/', TaskController.postaddTask)


// update task
task.get('/:id',TaskController.updateTask)


// upadte an existing task
task.post('/update/:id',TaskController.postupdateTask)

// delete a task
task.post('/delete/:id',TaskController.deleteTask)

module.exports = task;