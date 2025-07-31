const mongoose = require("mongoose");

let URL = process.env.MONGO_URL
const connectDB = async () => {
    try {
        await mongoose.connect(URL)
        console.log(`Server is connected`);
    } catch (error) {
        console.error(`Database connnection failed`, error.message)
        process.exit(0);
    }
}

module.exports = connectDB