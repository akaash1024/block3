require("dotenv").config();

const express = require("express");
const path = require("path")


const app = express();
app.use(express.json());



app.listen(PORT, ()=>{
    console.log(blueBright(`Server is running at http://localhost:${PORT}`));
})