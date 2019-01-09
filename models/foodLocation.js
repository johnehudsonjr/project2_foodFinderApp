const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const FoodLocation = new Schema({
    buildingName: String,
    floorNumber: String,
    roomNameNumber: String,
    availableFood: String
});

module.exports = mongoose.model("FoodLocation", FoodLocation)