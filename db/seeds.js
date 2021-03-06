const FoodLocation = require('../models/foodLocation')
const ShareFood = require('../models/AddFood.js')

FoodLocation.deleteMany({})
    .then(()=> {
        return FoodLocation.create({
            buildingName: "RedWest",
            floorNumber: "21",
            roomNameNumber:"Main Kitchen Area",
            availFood: []
        }).then((newLocation) =>{

            const createFood = ShareFood.create({
                img:"https://en.wikipedia.org/wiki/Pizza#/media/File:Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                food: "Pizza!",
                notes: "Last person please throw away the container",
                sharedBy: "Karen",
                date: "January 11th"
            }).then((createdFood) => {
                newLocation.availFood.push(createdFood)
            })

            const createFood2 = ShareFood.create({
                img:"https://pngimage.net/wp-content/uploads/2018/06/sub-png-1.png",
                food: "Turkey and Ham Sandwiches!!",
                notes: "From the operations Team",
                sharedBy: "Henry",
                date: "January 13th"
            }).then((createdFood) => {
                newLocation.availFood.push(createdFood)
            })

            Promise.all([createFood, createFood2])
            .then(()=>{
                newLocation.save()
            })


        })
    })