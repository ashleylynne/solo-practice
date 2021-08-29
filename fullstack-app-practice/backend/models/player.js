const mongoose = require("mongoose")
const Schema = mongoose.Schema

const playerSchema = new Schema({
    player_name: {
        type: String,
        required: true
    },
    team_abbreviation: {
        type: String,
        required: true
    },
    // age: {
    //     type: Number,
    //     required: true
    // },
    // player_height: {
    //     type: Number,
    //     required: true
    // },
    // player_weight: {
    //     type: Number,
    //     required: true
    // },
    // college: {
    //     type: String,
    //     required: true
    // },
    // country: {
    //     type: String,
    //     required: true
    // },
    // draft_year: {
    //     type: Number,
    //     required: true
    // },
    // draft_round: {
    //     type: Number,
    //     required: true
    // }

})


module.exports = mongoose.model("Player", playerSchema)