const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://vaibhavdb:10485@cluster0.y9udp.mongodb.net/Blogging-website?retryWrites=true&w=majority'
const mongoURI = 'mongodb://localhost:27017'


const connectToMongo=()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("Connected succesfully")
    })
}
module.exports = connectToMongo ;