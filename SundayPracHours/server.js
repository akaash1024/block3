
require("dotenv").config();

const express = require("express");
const connectDB = require("./database/db");

const authRoute = require("./routes/auth.route");
const errorHandler = require("./utils/errorHandler");
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routes 
app.get("/", (req, res) => {
  res.send("API is working ✅");
});


app.use("/api/auth", authRoute)


// hadnling error part
app.use(errorHandler)

const PORT = process.env.PORT

connectDB().then
    (
        () => {
            app.listen(PORT, () => {
                console.log(`Server is listening at https://localhost:${PORT}`)
            })
        }
    )



