import User from '../models/user'

export default (router) => {
  router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
      res.json(users);
    })
  })

  router.get('/users/seed', (req, res) => {
    let pedro = new User({
      name: 'Pedro Bras',
      password: 'password',
      admin: true
    })

    pedro.save((err) => {
      if (err) throw err

      console.log('User saved successfully')
      res.json({ success: true })
    })
  })
}

// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// TODO: route middleware to verify a token
