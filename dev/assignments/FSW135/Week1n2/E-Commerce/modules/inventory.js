const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Inventory BluePritn
const inventorySchema = new Schema({
    itemName: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    cost: Number
})

module.exports = mongoose.model("Inventory", inventorySchema)