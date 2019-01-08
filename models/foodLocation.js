const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const FoodLocation = new Schema({
    buildingName: String,
    floorNumber: Number,
    roomNameNumber: String,
    availableFood: String
});

module.exports = mongoose.model("FoodLocation", FoodLocation)