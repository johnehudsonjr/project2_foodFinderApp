ShareFoodLocation = require("../models/foodLocation")

const shareLocationController = {
    index: (req, res) => {
        res.render('homepage/index')
    },
    
    index2: (req, res) => {
        ShareFoodLocation.find({}).populate('availFood').then(locations =>{
            res.render('app/sharefood', {locations}) 
        })
    },

    new: (req, res) =>{
        res.render('app/sharefood')
    },

    new2: (req, res) =>{
        res.render('app/findfood')
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
        ShareFoodLocation.findById(locationID).populate("availFood").then((location) => {
            const availFood = location.availFood
            res.render('app/showSpecificLocation', {location, availFood})
        })
    },
    
    edit:(req, res) =>{
    const locationID = req.params.id
        res.render('app/update', {locationID})
    },

    update: (req,res) =>{
    const locationID = req.params.id
    ShareFoodLocation.findByIdAndUpdate(locationID, req.body, {new: true}).then((location)=>{
        res.redirect(`/${locationID}`)
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