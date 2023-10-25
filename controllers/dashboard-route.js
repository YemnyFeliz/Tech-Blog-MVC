const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res)=>{
    try{
        const postInfo = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
        const posts = postInfo.map((post)=> post.get({ plain: true }));
        return res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            user_Id: req.session.user_id
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const onePost = await Post.findByPk(req.params.id, {
            include: [User],
        });
        const post = onePost.get({ plain: true });

        return res.render('user-single-post', {
            post,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id
        });
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;