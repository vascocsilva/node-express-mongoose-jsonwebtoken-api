let express     = require('express')
let app         = express()
let bodyParser  = require('body-parser')
let morgan      = require('morgan')
let mongoose    = require('mongoose')

let jwt    = require('jsonwebtoken')
let config = require('./config')
let User   = require('./app/models/user')

// Config
let port = process.env.PORT || 8080

mongoose.connect(config.database)
app.set('superSecret', config.secret)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

// Test routes
app.get('/setup', (req, res) => {
  // create a sample user
  let pedro = new User({
    name: 'Pedro Bras',
    password: 'password',
    admin: true
  })

  // save the sample user
  pedro.save((err) => {
    if (err) throw err

    console.log('User saved successfully')
    res.json({ success: true })
  })
})

// Start server
app.listen(port)
console.log('Magic happens at http://localhost:' + port)
