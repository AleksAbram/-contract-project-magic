const router = require('express').Router();
const { Card } = require('../db/models');

router.route('/account')
  .get(async (req, res) => {
    if (!req.session.uid) {
      return res.redirect('/login');
    }

    const user = req.session.uid;
    const cards = await Card.findAll({ where: { user_id: user.id } });

    return res.render('account', { cards, user });
  });
module.exports = router;
