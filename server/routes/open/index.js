const router = require('express').Router(),
  { postComment, getComment } = require('../../controllers/comments'),
  { postProject, getProject } = require('../../controllers/projects'),
  { createUser, loginUser } = require('../../controllers/users');

router.post('/', postProject);
router.post('/login', loginUser);
router.post('/api/users/createproject', createUser);
router.get('/api/users/collaboration', getProject);
router.post('/api/users/collaboration/details', postComment);
router.get('/api/users/collaboration/details', getComment);

module.exports = router;
