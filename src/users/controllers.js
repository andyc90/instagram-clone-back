const User = require("./model");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUsername = await User.findOne({
      where: { username: username },
    });

    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingEmail = await User.findOne({ where: { email: email } });

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });

    res.status(201).json({ message: "User added", user: user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const userLogin = async (req, res) => {
  try {
    const authenticatedUser = req.user;

    res.status(200).json({
      message: `${authenticatedUser.username} logged in successfully`,
      user: authenticatedUser,
    });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  registerUser: registerUser,
  userLogin: userLogin,
};
