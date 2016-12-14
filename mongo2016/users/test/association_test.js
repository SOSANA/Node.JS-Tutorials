/**
 * - purpose of this test is to make sure it correctly queries Assocations to the db
 */

import assert from 'assert';
import User from '../src/user';
import Comment from '../src/comment';
import BlogPost from '../src/blogPost';

describe('Assocations', () => {
  let joe, blogPost, comment; // eslint-disable-line

  // before asserting save new documents
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is great', content: 'Yep it really is' });
    comment = new Comment({ content: 'Congrats on a great post' });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment); // this assoc. blog post with comments
    comment.user = joe; // this assoc. comments with joe model instance, mongoose has a setter behind the scenes

    // by using Promise.all we can avoid the guess work on using then()/catch()
    // joe.save();
    // blogPost.save();
    // comment.save();

    Promise.all([joe.save(), blogPost.save(), comment.save()])
    .then(() => done());
  });

  it('saves a relation between a user and a blogpost', (done) => {
    User.findOne({ name: 'Joe' })
      .populate('blogPosts')
      .then((user) => {
        // console.log(user); // eslint-disable-line
        assert(user.blogPosts[0].title === 'JS is great');
        done();
      });
  });

  it('saves a full relation graph', (done) => {
    User.findOne({ name: 'Joe' })
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'comment',
          populate: {
            path: 'user',
            model: 'user'
          }
        }
      })
      .then((user) => {
        // console.log(user.blogPosts[0]); // eslint-disable-line
        // console.log(user.blogPosts[0].comments); // eslint-disable-line
        assert(user.name === 'Joe');
        assert(user.blogPosts[0].title === 'JS is great');
        assert(user.blogPosts[0].comments[0].content === 'Congrats on a great post');
        assert(user.blogPosts[0].comments[0].user.name === 'Joe');
        done();
      });
  });
});
