const mongoose = require("mongoose");
const { lowercase } = require("zod");



const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        }
    }
)

const User = mongoose.model("User", UserSchema)
module.exports = { User }