const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    deleteUser,
    updatePassword,
    uploadAvatar
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/edit-profile', updateCurrentUser);
router.post('/logout', logoutUser);
router.delete('/', deleteUser);
router.put('/password', updatePassword);
router.post('/avatar', uploadAvatar);

module.exports = router;
