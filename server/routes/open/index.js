const router = require('express').Router(),

  { createUser, loginUser } = require('../../controllers/users'),
  { postComment } = require('../../controllers/comments');

router.post('/', createUser);
router.post('/login', loginUser);

require('../../controllers/comments');

router.post('/collaboration/details', postComment);

  { postComment } = require('../../controllers/comments');

module.exports = router;