const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String },
    name: { type: String },
    avatar: { type: String }
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
