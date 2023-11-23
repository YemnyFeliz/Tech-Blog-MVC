const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log('hello');
  // try {
    const userData = await User.findOne({ 
      where: { 
        username: req.body.username 
      } 
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: 'User not found' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(404)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username
      req.session.loggedIn = true;
      console.log(userData);
      res.json(userData);
    });

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  // } else {
  //   res.status(204).end();
  }
});

module.exports = router;