const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  var db = client.db('TodoApp');
  console.log("Connect to mongodb server");
  db.collection('Todos').insertOne({
    text:"Something to do",
    completed:false
  },(err,result)=>{
    if(err){
      return console.log("Unable to add Todo",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.collection("Users").insertOne({

    name:"Mehvash saifi",
    age:24,
    location:"Delhi"
  },(err,result)=>{
    if(err){
      return  console.log("Unable to add user",err);
    }
    console.log("Add user");
    console.log(result.ops);

  })




  client.close();
})
