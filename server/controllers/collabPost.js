const CollabPost = require('../db/models/collabPost');
mongoose = require('mongoose');

exports.postCollaboration = async (req, res) => {
  const collab = req.body;
  try {
    const newPost = await new CollabPost(collab);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCollaboration = async (req, res) => {
  CollabPost.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json('Error: ' + err));
};
