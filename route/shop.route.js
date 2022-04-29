const router = require('express').Router();
const { Card } = require('../db/models');

router.route('/shop')
  .get(async (req, res) => {
    const user = req.session.uid;
    if (!user) {
      return res.redirect('/login');
    }

    // Придумать логику временного сохранения купленных карточек для пользователя
    // Вернуть купленные карточки в переменную cards для отображения в корзине
    return res.render('shop');
  })
  .post(async (req, res) => {
    const user = req.session.uid;
    if (!user) {
      return res.redirect('/login');
    }

    if (req.body.id) {
      // здесь будет логика удаления карточки из корзины, не из базы данных

      return res.redirect('/shop');
    }

    // здесь будет логика после того как пользователь оформит заказ
    return res.redirect('/');
  });
module.exports = router;
