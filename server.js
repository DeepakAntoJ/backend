require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const YogaRoutes = require('./routes/yogauser')


const app = express()

app.use(express.json())

app.use('/api/yogauser/', YogaRoutes )


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        app.listen(process.env.PORT, () => {
        console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    }) 
