const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');

const homeRoutes = require('./home-routes.js');


router.use('/api', apiRoutes);
router.use('/api/posts', postRoutes);
router.use('/comment', commentRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;