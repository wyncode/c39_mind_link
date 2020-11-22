const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectBrief: { type: String, required: true },
    auditions: { type: String, required: true },
    status: { type: String, required: true },
    started: { type: String, required: true },
    talentNeeded: { type: String, required: true },
    genre: { type: String, required: true },
    mood: { type: String, required: true },
    projectAvatar: { type: String, required: true },
    mindlinkpProfile: { type: String }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
