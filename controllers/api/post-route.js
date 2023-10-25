const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {

    try {
        if (!req.body.post_text) {
            return res.status(400).json({ message: "Poss text is required" });
        }

        const newPost = await Post.create({
            title: req.body.title,
            post_text: req.body.post_text,
            user_id: req.session.user_id,
        });
        res.json(newPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
      console.log(req.body, req.params.id);
      const updatePost = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json(updatePost);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json(deletePost);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  module.exports = router;