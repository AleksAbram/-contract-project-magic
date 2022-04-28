const router = require('express').Router();

router.route('/reg')
  .get((req, res) => {
    res.render('reg');
  });

module.exports = router;