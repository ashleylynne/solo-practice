const express = require("express")
const player = require("../models/player")
const Player = require("../models/player")
const playerRouter = express.Router()

// get ALL
playerRouter.get("/", (req, res, next) => {
    Player.find((err, players) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(players)
    })
})
    // create
    .post("/", (req, res, next) => {
        newPlayer = new Player(req.body)
        newPlayer.save((err, savedPlayer) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedPlayer)
        })
    })
    // update
    .put("/:playerId", (req, res, next) => {
        Player.findOneAndUpdate(
            {_id: req.params.playerId},
            req.body,
            {new: true},
            (err, updatedPlayer) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedPlayer)
            }
        )
    })

    // get one
    .get("/:playerId", (req, res, next) => {
        Player.findOne(
            {_id: req.params.playerId}, 
            (err, player) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(player)
            })
    })

    // delete one
    .delete("/:playerId", (req, res, next) => {
        Player.findOneAndDelete(
            {_id: req.params.playerId},
            (err, deletedPlayer) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(`successfully deleted ${deletedPlayer._playername} from the db!`)
            }
        )
    })

module.exports = playerRouter