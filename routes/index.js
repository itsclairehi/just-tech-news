const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');


router.use('/api', apiRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;