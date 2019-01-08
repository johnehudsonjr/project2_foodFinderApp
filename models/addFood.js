const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const addFood = new Schema({
    img: String,
    sharedBy: String,
    notes: String,
    img: String,
    createdAt: String,
});

module.exports = mongoose.model("addFood", addFood)