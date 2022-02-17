const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
    mongoose.createConnection(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err)
            console.log("MongoDB connection failed!!!", err);
        else
            console.log("MongoDB connection established successfully!!!");
    })
}

module.exports = { connect: connectDB() }