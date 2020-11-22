const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/comments', commentRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;