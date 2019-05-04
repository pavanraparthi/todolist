const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/todos',(req,res) => {
	Todo.find((req, todos) => {
		res.send(todos);
	})
});

router.post('/todo', (req, res, next) => {
	var newTodo = new Todo({
		name: req.body.name,
		desc: req.body.desc,
		priority: req.body.priority,
		isCompleted: req.body.isCompleted
	})
	newTodo.save((error,todo) => {
		if(error){
			res.send({msg:'Error while adding todo'});
		}else{
			res.send({msg:'Todo added successfull'});
		}
	})
});

router.post('/update', (req, res, next) => {
	Todo.findOne({'_id':req.body._id}, (error, todo) => {
		if(error == null && todo == null)
			res.send({msg:'No todo found with requested details'})
		if(todo){
			todo.name = req.body.name;
			todo.desc = req.body.desc;
			todo.priority = req.body.priority;
			todo.isCompleted = req.body.isCompleted;
			todo.save();
			res.send({msg:'Todo item updated successful'});
		}else if(error){
			res.send({msg:'Not found todo item'});
		}
	})
})

router.delete('/todo',(req, res , next) => {
	Todo.deleteOne({'_id':req.body._id}, (error) => {
		res.send({msg:'Not found requested todo'});
	})
})
module.exports = router;