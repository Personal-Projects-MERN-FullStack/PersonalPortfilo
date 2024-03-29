const mongoose = require('mongoose');
const UserSchema = new Schema({
        title:{
            type:String,
            required : true
        },
        email:{
            type:String,
            required : true,
            unique:true
        },
        password:{
            type:String,
            required : true
        },
        date:{
            type:date,
            default : Data.now
        }
    }
  );
  
  module.exports = mongoose.model('user',UserSchema)