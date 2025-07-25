const mongoose = require("mongoose")



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database is Connected`);
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB