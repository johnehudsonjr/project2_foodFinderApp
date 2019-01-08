ShareFood = require("../models/foodLocation")

const shareFoodController = {
    index: (req, res) => {
        ShareFood.find({}).then(locations =>{
            res.render('app/index', {locations})
        })
    },

    new: (req, res) =>{
        res.render('app/shareFood')
    },

    create: (req, res) => {
        ShareFood.create({
            buildingName: req.body.buildingName,
            floorNumber: req.body.floorNumber,
            roomNameNumber: req.body.roomNameNumber,
            availableFood: req.body.availableFood
        }).then(newLocation => {
            res.redirect('/')
        })
    }

}

module.exports = shareFoodController