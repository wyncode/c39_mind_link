const router = require('express').Router(),
  { postComment, getComment } = require('../../controllers/comments'),
  {
    postCollaboration,
    getCollaboration
  } = require('../../controllers/collabPost'),
  { createUser, loginUser } = require('../../controllers/users');
require('../../controllers/comments');

router.post('/', createUser);
router.post('/login', loginUser);
router.post('/api/users/collaboration', postCollaboration);
router.get('/api/users/collaboration', getCollaboration);
router.post('/api/users/collaboration/details', postComment);
router.get('/api/users/collaboration/details', getComment);

module.exports = router;
