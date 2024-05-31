const mongoose = require('mongoose');
const connectMongoDB = () =>{
    const URI = "mongodb+srv://anvnt96:asdqwe123@cluster0.bs2jhhq.mongodb.net/CrudExpress";
    mongoose.connect(URI).then( () => {
        console.log("Connect to MongoDB");
    }).catch((error) =>{
        console.log('Error connecting to MongoDB', error);
    })
}
module.exports = connectMongoDB;