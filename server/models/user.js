var mongoose = require('mongoose');

var User = mongoose.model('User',{
   email:{
     type:String,
     reuqired:true
   }
});

module.exports = {
  User
}
