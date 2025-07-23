require("dotenv").config();

const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const express = require("express");
const connectDB = require("./connectDB");

const app = express();

app.use(express.json())

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}`);

    })
})

