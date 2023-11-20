const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
    });
    const postInfo = posts.map((post) => post.toJSON());

    const loggedIn = req.session.user_id ? true : false;

    res.render('homepage', {
      postInfo,
      loggedIn,
      user_id: req.session.user_id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const onePost = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: 'password',
          },
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: {
                exclude: 'password',
              },
            },
          ],
        },
      ],
    });
    const post = onePost.get({ plain: true });
    return res.render('home-single-post', {
      post,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;