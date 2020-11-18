const router = require('express').Router(),
  { postComment } = require('../../controllers/comments');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
// router.get('/api/demo', (request, response) => {
//   response.json({
//     message: 'Hello from server.js'
//   });
// });
// END DEMO

router.post('/collaboration/details', postComment);

module.exports = router;
