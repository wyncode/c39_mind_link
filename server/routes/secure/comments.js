const router = require('express').Router(),
  {
    getCommentsForAProject,
    createComment
  } = require('../../controllers/comments');

router.get('/projects/:id/comments', getCommentsForAProject);
router.post('/', createComment);

module.exports = router;
