const router = require('express').Router();
const { Card } = require('../db/models');

router.route('/cards')
  .get(async (req, res) => {
    const user = req.session.uid;
    if (!user) {
      return res.redirect('/login');
    }

    const cards = await Card.findAll({ where: { user_id: user.id } });

    return res.redirect('/account', { cards });
  })
  .post(async (req, res) => {
    const user = req.session.uid;
    if (!user) {
      return res.redirect('/login');
    }

    if (req.body.id) {
      await Card.destroy({ where: { id: req.body.id } });

      return res.redirect('/account');
    }

    const {
      title, img, price, condition,
    } = req.body;
    await Card.create({
      title, img, price, condition, user_id: user.id, city: user.city,
    });
    return res.redirect('/account');
  });
module.exports = router;
