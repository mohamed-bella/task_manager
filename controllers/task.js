const express = require('express');
const Task = require('../models/task')

exports.getHomePage = (req,res, next) => {
//  

     Task.find({ taskStatus: { $in: ['done', 'inProgress', 'todo'] } } , 'title taskStatus _id' , (err , tasks) => {
        res.render('index' , {tasks})
    })
}

exports.getAllTasks = (req,res, next) => {
    res.json(req.body)
}



exports.postaddTask = (req,res, next) => {
    const newtask = new Task(req.body)
     console.log(req.body)
     newtask.save()
        .then(result => {
            console.log('a new new task added')
        })
        .catch(err => {
            console.log(err)
        })
        res.redirect('/')
}


exports.updateTask = (req,res, next) => {
    const id = req.params.id
    Task.findById(id)
        .then(task => {
        res.render('update' , {task})
    })
}

// post the updated task

exports.postupdateTask = (req,res) => {
    const id = req.params.id 
    Task.findByIdAndUpdate(id, {
        title : req.body.title,
        taskStatus : req.body.taskStatus
    })
        .then(result => {
            console.log('task Updated')
            res.redirect('/')
        })
        .catch(err => {
        console.log(err)
    })
}


exports.deleteTask = (req,res, next) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
        .then(result => {
            console.log('succesfuly deleted')
            res.redirect('/')
        })
    
}


exports.getSingleTask = (req,res, next) => {
    res.json(req.body)
}
