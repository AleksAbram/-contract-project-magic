const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('cards');
  });

module.exports = router;
