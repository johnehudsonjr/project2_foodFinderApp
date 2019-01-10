const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const FoodLocation = new Schema({
    buildingName: String,
    floorNumber: String,
    roomNameNumber: String,
    availFood: [{
        type: Schema.Types.ObjectId,
        ref:'AddFood'
    }]
});

module.exports = mongoose.model("FoodLocation", FoodLocation)