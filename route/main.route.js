const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  // console.log('=======>',req.session.uid);
  // если id пользователя лежит в сессии - находим его в бд
  // const user = req.session.uid && await User.findByPk(req.session.uid.id);
  const klient = req.session.uid;
  // console.log();
  res.render('cards', {
    klient,
  });
});

module.exports = router;
