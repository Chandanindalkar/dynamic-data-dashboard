const asyncHandler = require('express-async-handler')
const UserData = require('../models/userModel')

const getUsers = asyncHandler(async (req, res) => {
    UserData.find()
        .then((userData) => {
        res.json(userData);
        })
        .catch((err) => {
        console.log('Error fetching user data:', err);
        res.json({ success: false });
        });
    }
);

module.exports = {
    getUsers,
}