const router = require('express').Router();

router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;