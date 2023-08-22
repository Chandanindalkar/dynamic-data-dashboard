const mongoose = require('mongoose')

// Defining a schema for the user data
const userDataSchema = new mongoose.Schema({
    sex: String,
    dob: Number,
    name: String,
    mobile: String,
    govtId: String,
    gaurdian:String,
    email: String,
    emrgencyNumber: Number,
    address: String,
    state: String,
    city: String,
    country: String,
    pincode: Number,
    occupation: String,
    religion: String,
    mStatus: String,
    bloodGroup: String,
    nationality: String,
  
});

module.exports = mongoose.model('userData', userDataSchema)