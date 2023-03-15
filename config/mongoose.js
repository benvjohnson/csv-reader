const mongoose = require('mongoose'); //requiring mongoose
mongoose.connect('mongodb+srv://ben:ben@cluster0.gvd5o9e.mongodb.net/?retryWrites=true&w=majority'); //conneting to MongoDB
const db = mongoose.connection; //acquiring the connection

//if error occured
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB!'));

//if connected successfully
db.once('open', function () {
    console.log('Successfully connected to MongoDB!');
});

module.exports = db;