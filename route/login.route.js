const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/login')
  .get((req, res) => {
    if (req.session.uid) {
      res.redirect('/');
    }
    res.render('login');
  })
  .post(async (req, res) => {
    // авторизация, получаем email, password из формы
    const { email, password } = req.body;

    // ищем пользователя с таким email в БД
    const user = await User.findOne({ where: { email } });

    // если такой пользователь есть в БД и пароль верный
    // (bcrypt.compare сравнивает пароль с его хешем в БД)
    if (user && await bcrypt.compare(password, user.password)) {
      // кладём весь объект пользователя в сессию
      // в этот момент создаётся уникальный ключ сессии и отправляется
      // браузеру пользователя в виде куки. Так же создаётся файл в
      // папке sessions с таким же именем и в этот файл уже кладётся uid
      req.session.uid = user;
      res.redirect('/');
    } else {
      res.render('login', {
        error: 'E-mail или пароль введены неверно!',
        email,
      });
    }
  });
module.exports = router;
