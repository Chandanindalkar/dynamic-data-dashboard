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

// Defining a model for the user data collection
module.exports = mongoose.model('userData', userDataSchema)
//mongoose.model fn(takes 2 parameter collection name and schema) is ued to create model which is used to add new data and save it
//UserData is model created, userdata is collection name in mongoose, userDataSchema is schema