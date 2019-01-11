// This is the addFoodController. The goal here is for users to be able to add food to their available page.
AddFood = require("../models/AddFood")
ShareFoodLocation = require("../models/foodLocation")


const addFoodController = {
    show: (req, res) => {
        const locationID = req.params.id
        res.render("addFoodView/addfood" , {locationID:locationID})
    
    },

    create: (req, res) => {
        const locationID = req.params.id
        ShareFoodLocation.findById(locationID)
        .then((FoodArray) => {
            AddFood.create(req.body)
            .then((newFood) => {
                FoodArray.availFood.push(newFood)
                FoodArray.save()
                // ADD ID VARIABLE SO IT REDIRECTS TO LOCATION PAGE
                res.redirect(`/${FoodArray._id}`)
            })
        })
    },
   

}

module.exports = addFoodController