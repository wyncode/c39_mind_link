const router = require('express').Router(),
  { postComment, getComment } = require('../../controllers/comments'),
  {
    postCollaboration,
    getCollaboration
  } = require('../../controllers/collabPost');

router.post('/', createUser);
router.post('/login', loginUser);

require('../../controllers/comments');

router.post('/collaboration', postCollaboration);
router.get('/collaboration', getCollaboration);
router.post('/collaboration/details', postComment);
router.get('/collaboration/details', getComment);

module.exports = router;