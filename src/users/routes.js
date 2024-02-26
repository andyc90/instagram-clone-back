const { Router } = require("express");
const userRouter = Router();
const { registerUser, userLogin } = require("./controllers");

userRouter.post("/users/registerUser", registerUser);
userRouter.post("/users/userLogin", userLogin);

module.exports = userRouter;
