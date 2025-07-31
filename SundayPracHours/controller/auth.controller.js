/*
register
login
users

*/



const User = require("../models/auth.model")

const register = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body
        const isUserExist = await User.findOne({ email })

        if (isUserExist) {
            return res.status(400).json({ success: false, message: "Email is already reigsterd with us" })
        }

        const newUser = await User.create({ username, email, phone, password })
        const newUserDetails = {
            token: await newUser.generateToken(),
            userId: newUser._id.toString(),
        }

        return res.status(201).json({
            success: true,
            message: "Successfully Created",
            newUserDetails,
        });

    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    console.log(req.body);

    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email });


        if (!isUserExist) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Credentials" });
        }

        const isPasswordValid = await isUserExist.comparePassword(password);

        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        const userDetails = {
            token: await isUserExist.generateToken(),
            userId: isUserExist._id.toString(),
        };

        return res.status(200).json({
            success: true,
            message: "Login Successful backend",
            data: userDetails, // ✅ Ensure 'data' contains token
        });
    } catch (error) {
        next(error);
    }
};


const user = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

module.exports = { register, login, user }