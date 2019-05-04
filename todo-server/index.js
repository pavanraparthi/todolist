var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');
const port = 3000;

mongoose.connect("mongodb://localhost:27017");


mongoose.connection.on('connected',()=>{
    console.log("Connected mongo DB at port 27017");
});

mongoose.connection.on('error',(msg)=>{
    if(msg){
        console.log("Error while connecting to Mongo DB :: error :"+msg);
    }
});


app.get('/',(req,res)=>{
    res.send('Todo list API :: goto api routes');
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.listen(port,()=>{
    console.log("server started on port : "+port);
});