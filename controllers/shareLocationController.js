ShareFoodLocation = require("../models/foodLocation")

const shareLocationController = {
    
    // index: (req, res) => {
    //     ShareFoodLocation.find({}).then(locations =>{
    //         res.render('app/index', {locations}) 
    //     })
    // },
    index: (req, res) => {
        res.render('app/index') 

    },

    index2: (req, res) => {
        ShareFoodLocation.find({}).then(locations =>{
            res.render('app/findfood', {locations}) 
        })
    },

    new: (req, res) =>{
        res.render('app/shareFood')
    },

    new2: (req, res) =>{
        res.render('app/findFood')
    },

    create: (req, res) => {
        ShareFoodLocation.create({
            buildingName: req.body.buildingName,
            floorNumber: req.body.floorNumber,
            roomNameNumber: req.body.roomNameNumber,
            availableFood: req.body.availableFood
        }).then(newLocation => {
            res.redirect('/findfood') 
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
            res.redirect('/findfood')
        })
    }
}

module.exports = shareLocationController