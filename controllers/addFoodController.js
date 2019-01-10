// This is the addFoodController. The goal here is for users to be able to add food to their available page.
ShareFoodLocation = require("../models/foodLocation")
AddFood = require("../models/AddFood")

const addFoodController = {
    index: (req, res) => {
        const locationID = req.params.id
        ShareFoodLocation.findByID(locationID).populate('')

    },


}