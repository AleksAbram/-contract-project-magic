const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('Main page!');
  });

module.exports = router;
