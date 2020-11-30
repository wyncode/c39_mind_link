const User = require('../db/models/user'),
  {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../emails/index'),
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
    sendWelcomeEmail(user.email, user.firstName);
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
    res.status(400).json({ error: error.message });
  }
};

//Get current user
exports.getCurrentUser = async (req, res) => {
  res.json(req.user);
};

//Update a user
exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'firstName',
    'lastName',
    'email',
    'password',
    'artistName',
    'socialMedia',
    'bio',
    'currentProjectOne',
    'currentProjectTwo',
    'currentProjectThree',
    'currentProjectFour',
    'myMusicOne',
    'myMusicTwo',
    'myMusicThree',
    'myMusicFour',
    'avatar'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates!' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Logout a User
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a User
exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.firstName);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Password Reset Request
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.firstName },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UpdatePassword
exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Upload an Avatar
exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
