const mongoose = require('mongoose')
const Schema = mongoose.Schema


//movie BluePritn
const movieSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    genre: {
        type:String,
        required: true
    },
    relaseYear: Number
})

module.exports = mongoose.model("Movie", movieSchema)