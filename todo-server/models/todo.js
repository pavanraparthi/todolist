const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    }
});

const Todos = module.exports = mongoose.model('Todos',TodoSchema);