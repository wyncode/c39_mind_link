const router = require('express').Router(),
  { postComment, getComment } = require('../../controllers/comments'),
  { postProject, getProject } = require('../../controllers/projects'),
  { createUser, loginUser } = require('../../controllers/users');

router.post('/', postProject);
router.post('/login', loginUser);
router.post('/createUser', createUser);
router.get('/collaboration', getProject);
router.post('/collaboration/details', postComment);
router.get('/collaboration/details', getComment);

module.exports = router;
