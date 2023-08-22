const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db')
const UserData = require('./models/userModel')

const app = express();
const port = process.env.PORT || 3001;

connectDB()

app.use(express.json()); //middleware function - for parsing json to req body
app.use(cors());         // middleware function - for CORS

const { getUsers } = require('./controller/usersController')

app.get('/users', getUsers);

app.post('/', (req, res) => { // starts here 
  // console.log(req.body);

  // Creating a new user data object from the request body
  const userData = new UserData({ //userData is new object being creted using UserData from the req body
    name: req.body.name,
    sex: req.body.sex,
    dob: req.body.dob,
    mobile: req.body.mobile,
    govtId: req.body.govtId,
    gaurdian: req.body.gaurdian,
    email: req.body.email,
    emrgencyNumber: req.body.emrgencyNumber,
    address: req.body.address,
    state: req.body.state,
    city: req.body.city,
    country: req.body.country,
    pincode: req.body.pincode,
    occupation: req.body.occupation,
    religion: req.body.religion,
    mStatus: req.body.mStatus,
    bloodGroup: req.body.bloodGroup,
    nationality: req.body.nationality, 
  });

  
  // Saving the user data to the MongoDB Atlas database
  userData.save() // using save func() the new object created above is saved in database
    .then(() => {
      console.log('User data saved successfully');//if successful
      res.json({ success: true });
    })
    .catch((err) => { //if error
      console.log('Error saving user data:', err);
      res.json({ success: false });
    });
});


// app.listen() method is used to start a server on a specified port and begin listening to incoming client requests takes 2 parameters
app.listen(port, () => { // 1. port i.e. no. here it is 3001, 1. callback fn - here console is inside it
  console.log(`Server running on port ${port}`);
});