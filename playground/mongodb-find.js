const {MongoClient,ObjectId}= require("mongodb");




MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  var db = client.db('TodoApp');
  console.log("Connect to mongodb server");
  db.collection("Todos").find({
    _id: new ObjectId('5a72131cf6daef2e04069503')
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log(err)
  })





  client.close();
})
