const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const AddFood = new Schema({
    img: String,
    food: String,
    notes: String,
    sharedBy: String,
    date: String,
});

module.exports = mongoose.model("AddFood", AddFood)