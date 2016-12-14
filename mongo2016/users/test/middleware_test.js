/**
 * - purpose of this test is to make sure our middleware is working correctly
 */

import assert from 'assert';
import User from '../src/user';
import BlogPost from '../src/blogPost';

describe('Middleware', () => {
  let joe, blogPost;  // eslint-disable-line

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is great', content: 'Yep it really is' });

    joe.blogPosts.push(blogPost);

    Promise.all([joe.save(), blogPost.save()])
    .then(() => done());
  });

  it('users clean up dangling blogposts on remove', (done) => {
    joe.remove()
      .then(() => BlogPost.count())
      .then((count) => {
        assert(count === 0);
        done();
      });
  });
});
