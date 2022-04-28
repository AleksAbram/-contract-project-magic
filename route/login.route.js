const router = require('express').Router();

router.route('/login')
  .get((req, res) => {
    res.render('login');
  });

module.exports = router;