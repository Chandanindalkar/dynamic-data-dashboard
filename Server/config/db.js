const mongoose = require('mongoose')
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,     //tells Mongoose to use the MongoDB driver's new URL parser instead of the previous one
            useUnifiedTopology: true,
          })
        console.log(`Connected to DB: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = {
    connectDB
}