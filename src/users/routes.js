const { Router } = require("express");
const userRouter = Router();
const { registerUser, userLogin, getAllUsers } = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/users/registerUser", hashPass, registerUser);
userRouter.post("/users/userLogin", comparePass, userLogin);
userRouter.get("/users/getAllUsers", getAllUsers);

module.exports = userRouter;
