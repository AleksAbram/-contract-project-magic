const router = require('express').Router();
const { Op } = require('sequelize');
const { Card } = require('../db/models');
const { cities } = require('../cities');

router.get('/', async (req, res) => {
  const user = req.session.uid;
  if (!user) {
    return res.redirect('/login');
  }
  const cards = await Card.findAll({ where: { is_sold: false } });
  return res.render('cards', {
    user,
    cards,
    cities,
  });
}).post('/', async (req, res) => {
  const user = req.session.uid;
  if (!user) {
    return res.redirect('/login');
  }
  const { search, city } = req.body;
  const where = { is_sold: false };
  if (search || city) {
    where[Op.or] = {};
    if (search) {
      where[Op.or].title = { [Op.like]: search };
    }
    if (city) {
      where[Op.or].city = city;
    }
  }
  const cards = await Card.findAll({ where });
  return res.render('cards', {
    user,
    cards,
    cities,
  });
});

module.exports = router;
