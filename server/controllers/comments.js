const Comment = require('../db/models/comment');
const Project = require('../db/models/project');
mongoose = require('mongoose');

// exports.createComment = async (req, res) => {
//   const comment = req.body;
//   try {
//     const newPost = new Comment(comment);
//     await newPost.save();
//     res.status(201).send(newPost);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.getCommentsbyProject = async (req, res) => {
  Comment.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json('Error: ' + err));
};

// exports.createComment = async (req, res) => {
//   const comment = req.body;
//   try {
//     const newPost = new Comment(comment);
//     newPost.project= req.params.project_id;
//     Project.findById(req.params.project_id)
//     await newPost.save();
//     res.status(201).send(newPost);

//     (project) => { newPost.save
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.createCommentbyProject = async (req, res) => {
  const comment = await new Comment({
    ...req.body,
    project: req.params.id
  });
  try {
    console.log('params', comment);
    comment.save();
    res.status(201).json(comment);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
