const mongoose = require('mongoose');
User = require('./user.js');

const projectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectBrief: { type: String, required: true },
    auditions: { type: String, required: true },
    started: { type: String, required: true },
    talentNeeded: { type: String, required: true },
    genre: { type: String, required: true },
    mood: { type: String, required: true },
    // comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    projectAvatar: {
      type: String,
      default: 'https://files.willkennedy.dev/wyncode/wyncode.png'
    },
    mindlinkpProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
