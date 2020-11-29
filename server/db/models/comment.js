const mongoose = require('mongoose');
Project = require('./project');
User = require('./user.js');

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    mindlinkpProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
  },
  { timestamps: true }
);
// commentSchema.virtual('project', {  ref: 'Project',  localField: 'project',  foreignField: '_id'});
// commentSchema.virtual('profile', {  ref: 'User',  localField: 'mindlinkpProfile',  foreignField: 'artistName'});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
