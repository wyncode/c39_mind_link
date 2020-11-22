const router = require('express').Router(),
  { getProjects, createProject } = require('../../controllers/projects');

router.get('/', getProjects);
router.post('/', createProject);

module.exports = router;
