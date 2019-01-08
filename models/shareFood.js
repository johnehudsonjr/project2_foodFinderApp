const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ShareFood = new Schema({
    img: String,
    sharedBy: String,
    notes: String,
    img: String,
    createdAt: String,
});

module.exports = mongoose.model("ShareFood", ShareFood)