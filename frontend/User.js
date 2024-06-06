const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name :{
    type:String,
    required : true,
    min: 3,
    unique: true
},
email : {
    type : String,
    required : true,
    unique: true
},
token:{
    type:String
   
},
password : {
    type : String,
    required : true,
    unique: true,
    min: 5
},
profilePicture : {
    type : String,
    default : ""
},
coverPicture : {
    type : String,
    default : ""
}
,
follers : {
    type : Array,
    default : []
},
following : {
    type : Array,
    default : []
},
isAdmin : {
    type : Boolean,
    default : false
},
desc : {
    type : String,
    max : 50
},
city : {
    type : String,
    default : ""
},
from : {
    type : String,
    default : ""
},

relationship : {
    type : Number,
    enum : [1,2,3]
},
},

{timestamps : true}
)


module.exports = mongoose.model("User",userSchema)