import mongoose from 'mongoose';
import PostSchema from './post';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  posts: [PostSchema], // subdocuments
  likes: Number,
  blogPosts: [{ type: Schema.Types.ObjectId, ref: 'blogPost' }]
});

UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

UserSchema.pre('remove', function(next) {
  // better to pull another model out of mongoose that has already been
  // registered. The mongoose.model() call helper will not be called to avoid
  // model load conflicts when removing all associations of other collections
  const BlogPost = mongoose.model('blogPost');
    // this === joe

  // go into BlogPost remove any id in blogPosts array
  BlogPost.remove({ _id: { $in: this.blogPosts } })
  .then(() => next());
});

const User = mongoose.model('user', UserSchema);

export default User;
