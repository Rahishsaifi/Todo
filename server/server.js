var express = require('express');
var bodyParser = require('body-parser');

//Local Files
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos/save',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.status(200).send(doc);
  },(e)=>{
   res.status(400).send(e);
  })
});

app.post('user/save',(req,res)=>{
  var user = new User({
    email:res.body.email
  })
  user.save().then((doc)=>{
    res.status(200).send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})





app.listen(3000,()=>{
  console.log("Server listen is on port 3000");
});
