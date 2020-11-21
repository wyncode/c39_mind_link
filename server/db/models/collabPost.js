const mongoose = require('mongoose');

const collabPostSchema = new mongoose.Schema(
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
    avatar: { type: String, required: true },
    mindlinkpProfile: { type: String }
  },
  { timestamps: true }
);

const CollabPost = mongoose.model('CollabPost', collabPostSchema);

module.exports = CollabPost;
