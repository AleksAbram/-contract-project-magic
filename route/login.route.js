const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

router.route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    // авторизация, получаем email, password из формы
    const { email, password } = req.body;
    // console.log('=========>', email);

    // ищем пользователя с таким email в БД
    const user = await User.findOne({ where: { email } });

    // если такой пользователь есть в БД и пароли верный
    // (bcrypt.compare сравнинвает пароль с его хешем в БД)
    if (user && await bcrypt.compare(password, user.password)) {
      // кладём id пользователя в сессию
      // в этот момент создаётся уникальный ключ сессии и отправляется
      // браузеру пользователя в виде куки. Так же создаётся файл в
      // папке sessions с таким же именем и в этот файл уже кладётся uid
      req.session.uid = user;
      res.redirect('/');
    } else {
      res.send('Нет такого пользователя либо неверный пароль.');
    }
  });
module.exports = router;
