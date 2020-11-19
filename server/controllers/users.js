const User = require('../db/models/user'),
  cloudinary = require('cloudinary').v2,
  jwt = require('jsonwebtoken');

//Creating a User
exports.createUser = async (req, res) => {
  const { artistName, firstName, lastName, email, password } = req.body;
  try {
    const user = new User({
      artistName,
      firstName,
      lastName,
      email,
      password
    });
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Login in a User
exports.loginUser = async (req, res) => {
  const { artistName, password } = req.body;
  try {
    const user = await User.findByCredentials(artistName, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (error) {
    res.status(400).sjon({ error: error.message });
  }
};
