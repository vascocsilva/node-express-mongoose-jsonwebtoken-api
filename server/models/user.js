import mongoose from 'mongoose'

export default mongoose.model('User', new mongoose.Schema({
  email: { type: Email, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  created_at: Date,
  updated_at: Date
}))
