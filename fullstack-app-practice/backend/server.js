// data command:
// kaggle datasets download -d justinas/nba-players-data

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 9000
const morgan = require("morgan")
const playerRouter = require("./routes/playerRouter.js")

app.use(express.json())
app.use(morgan("dev"))


mongoose.connect("mongodb://localhost:27017/players",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    
}, () => console.log("connected to the db!")
)

// route
app.use("/players", playerRouter)

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// server port
app.listen(PORT, () => {
    console.log(`ayo port ${PORT}, we in there!`)
})