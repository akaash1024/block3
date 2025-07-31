const validate = require("../middlewares/validate.middleware");
const { registerSchema, loginSchema } = require("../validators/auth.validator");
const authContoller = require("../controller/auth.controller")


const authRoute = require("express").Router();


authRoute.route("/register").post(validate(registerSchema), authContoller.register)

authRoute.route("/login").post(validate(loginSchema), authContoller.login)

authRoute.route("/user").get(authContoller.user)

module.exports = authRoute;