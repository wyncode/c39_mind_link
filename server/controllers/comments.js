const Comment = require('../db/models/comment');
mongoose = require('mongoose');

exports.createComment = async (req, res) => {
  const comment = req.body;
  try {
    const newPost = new Comment(comment);
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  Comment.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json('Error: ' + err));
};
