const Comment = require('../db/models/comment');
// mongoose = require('mongoose')

exports.postComment = async (req, res) => {
  const { name, comment } = req.body;
  try {
    const newPost = await new Comment({ name, comment });
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = new User({
//       name,
//       email,
//       password
//     });
//     res.status(201).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };
