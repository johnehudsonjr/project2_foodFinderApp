ShareFoodLocation = require("../models/foodLocation")

const shareLocationController = {
    index: (req, res) => {
        ShareFoodLocation.find({}).then(locations =>{
            res.render('app/index', {locations})
        })
    },

    new: (req, res) =>{
        res.render('app/shareFood')
    },

    create: (req, res) => {
        ShareFoodLocation.create({
            buildingName: req.body.buildingName,
            floorNumber: req.body.floorNumber,
            roomNameNumber: req.body.roomNameNumber,
            availableFood: req.body.availableFood
        }).then(newLocation => {
            res.redirect('/')
        })
    }

}

module.exports = shareLocationController