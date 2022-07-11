const { Post } = require('../models');

const postData = [
  {
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
        username: 'test_user'
    }
  },
  {
  post_url: 'https://www.google.com/',
  title: 'Google',
  created_at: new Date(),
  vote_count: 12,
  comments: [{}, {}],
  user: {
      username: 'test_user'
  }
},
{
    post_url: 'https://www.facebook.com/',
    title: 'FaceBook',
    created_at: new Date(),
    vote_count: 18,
    comments: [{}, {}],
    user: {
        username: 'test_user'
    }
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;