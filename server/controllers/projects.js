const Project = require('../db/models/project');
mongoose = require('mongoose');

exports.createProject = async (req, res) => {
  const project = req.body;
  try {
    const newProject = await new Project(project);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  Project.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json('Error: ' + err));
};
