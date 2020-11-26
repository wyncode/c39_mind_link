const router = require('express').Router(),
  {
    getProjects,
    createProject,
    getProjectDetailsById
  } = require('../../controllers/projects');

router.get('/', getProjects);
router.post('/', createProject);
router.get('/project/:id', getProjectDetailsById);

module.exports = router;
