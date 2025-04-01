// routes/blog.js
const express = require('express');
const router = express.Router();
const { getPosts, getPost } = require('../utils/hashnode');

const HASHNODE_HOST = 'millerdevdesk.hashnode.dev';

router.get('/', async (req, res) => {
    const posts = await getPosts(HASHNODE_HOST);
    res.render('blog/index', { title: 'Blog', posts });
});

router.get('/:slug', async (req, res) => {
    const post = await getPost(HASHNODE_HOST, req.params.slug);
    if (!post) return res.status(404).send('Post not found');
    const posts = await getPosts(HASHNODE_HOST); // To still show the sidebar
    res.render('blog/post', { title: post.title, post, posts });
});


module.exports = router;