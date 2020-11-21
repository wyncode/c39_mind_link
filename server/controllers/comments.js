const Comment = require('../db/models/comment');
mongoose = require('mongoose');

exports.postComment = async (req, res) => {
  const comment = req.body;
  try {
    const newPost = await new Comment(comment);
    await newPost.save();
    console.log(comment);
    res.status(201).send(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComment = async (req, res) => {
  CommentPost.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json('Error: ' + err));
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
