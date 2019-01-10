const FoodLocation = require('../models/foodLocation')
const ShareFood = require('../models/shareFood')

FoodLocation.deleteMany({})
    .then(()=> {
        return FoodLocation.create({
            buildingName: "RedWest",
            floorNumber: "21",
            roomNameNumber:"Main Kitchen Area",
            availFood: []
        }).then((newLocation) =>{
            const createFood 
        })
    })