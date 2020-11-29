const router = require('express').Router({ mergeParams: true }),
  {
    getCommentsbyProject,
    createCommentbyProject
  } = require('../../controllers/comments');

router.get('/comments', getCommentsbyProject);
router.post('/project/:id/comments', createCommentbyProject);

module.exports = router;
