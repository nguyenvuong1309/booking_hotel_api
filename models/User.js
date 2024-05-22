


const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  fullName: String,
  isAdmin: Boolean,
  Web3AddressWallet: String,
  work: String,
  education: String,
  description: String,
  image: String,
  address: String,
  iv: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel; 