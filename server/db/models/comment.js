const mongoose = require('mongoose');
// moment = require('moment');

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    name: { type: String }
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
