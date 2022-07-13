const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://vaibhavdb:10485@cluster0.y9udp.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo=()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("Connected succesfully")
    })
}
module.exports = connectToMongo ;