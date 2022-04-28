const router = require('express').Router();

router.route('/shop')
  .get((req, res) => {
    res.render('shop');
  });

module.exports = router;
