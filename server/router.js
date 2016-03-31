import express from 'express'
import User from './routes/user'

export default () => {
  let router = express.Router()

   User(router)

  return router
}
