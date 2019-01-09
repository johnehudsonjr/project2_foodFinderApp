ShareFoodLocation = require("../models/foodLocation")

const shareLocationController = {
    
    index: (req, res) => {
        ShareFoodLocation.find({}).then(locations =>{
            // res.render('app/index', {locations}) 
            res.render('app/index')
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
    },


    show: (req, res) =>{
        const locationID = req.params.id
        ShareFoodLocation.findById(locationID).then((location) => {
            res.render('app/showSpecificLocation', {location})
        })
    },

    delete: (req, res) => {
        const locationID = req.params.id
        ShareFoodLocation.findByIdAndRemove(locationID).then(()=>{
            res.redirect('/')
        })
    }
}

module.exports = shareLocationController