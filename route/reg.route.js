const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const { cities } = require('../cities');

router
  .route('/registration')
  .get((req, res) => {
    if (req.session.uid) {
      res.redirect('/');
    }
    res.render('registration', { cities });
  })
  .post(async (req, res) => {
    // регистрация, получаем email, password из формы
    const {
      username, email, password, city,
    } = req.body;

    // Проверяем, что пользователя с таким email нет в БД
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.render('registration', {
        error: 'Пользователь с таким email уже зарегистрирован!',
        cities,
        username,
        email,
      });
    } else {
      // создаём нового пользователя
      const newUser = await User.create({
        username,
        email,
        // хешируем пароль (нельзя хранить пароли в БД в открытом виде)
        password: await bcrypt.hash(password, 10),
        city,
      });

      // сразу же авторизируем пользователя (кладём id в сессию)
      req.session.uid = newUser;
      res.redirect('/');
    }
  });
module.exports = router;
