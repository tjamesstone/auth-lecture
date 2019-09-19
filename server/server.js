require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCTRL = require('./authController')

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

//ENDPOINTSg

massive(CONNECTION_STRING).then (db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})