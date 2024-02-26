const { Router } = require("express");
const userRouter = Router();
const { registerUser, userLogin } = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/users/registerUser", hashPass, registerUser);
userRouter.post("/users/userLogin", comparePass, userLogin);

module.exports = userRouter;
