const router = require('express').Router(),
  { getComments, createComment } = require('../../controllers/comments');

router.get('/', getComments);
router.post('/', createComment);

module.exports = router;
