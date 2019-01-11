SubscriberList = require("../models/subcriberList")

const subscriberListController = {

    index: (req, res) => {
        res.render('subscribe/subscribe')
    },

    create: (req,res) => {
        SubscriberList.create({
            name: req.body,
            email: req.body,
            cellphone: req.body
        }).then(() =>{
        res.redirect('/')
        })

    }

}

module.exports = subscriberListController