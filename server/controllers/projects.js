const Project = require('../db/models/project');

mongoose = require('mongoose');

exports.createProject = async (req, res) => {
  const project = await new Project({
    ...req.body,
    mindlinkProfile: req.user._id
  });
  try {
    project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  Project.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.getProjectDetailsById = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'not a valid project' });

  try {
    const project = await Project.findOne({ _id }).populate('comments');
    if (!project) return res.status(400).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
