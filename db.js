// For setting up mongoDB call this file in server.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.set("useFindAndModify", false);

mongoose.connect("mongodb+srv://Narendra:Narendra@cluster0.rpxdjul.mongodb.net/Interviews?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    },
    () => {
        console.log("Connected to DB!");
    }
);