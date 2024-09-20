const mongoose = require('mongoose');

// Define User schema and model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});  
const User = mongoose.model('User', userSchema);

module.exports = User;
  
