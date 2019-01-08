const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const SubscriberList = new Schema({
    name: String,
    email: String,
    cellPhone: String
});

module.exports = mongoose.model("SubscriberList", SubscriberList)