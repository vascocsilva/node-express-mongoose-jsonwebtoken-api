import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

import config from './config'
import router from './router'

let app = express()

// Config
let port = process.env.PORT || 8080

// Db connect
mongoose.connect(config.database)
app.set('superSecret', config.secret)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Console.logging
app.use(morgan('dev'))

// Inject the router object
app.use('/', router())

// Start server
app.listen(port)
console.log('Magic happens at http://localhost:' + port)

export default app
