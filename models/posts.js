var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt'
});

Post.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
  author: { type: Types.Relationship, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  publishedAt: Date,
  location: { type: Types.Location },
  image: { type: Types.CloudinaryImage },
  importantStats: { type: Types.Html, wysiwyg: true, height: 200 },
  content: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 }
  }
});

Post.defaultColumns = 'ttle, state|20%, author, publishedAt|15%';
Post.register();
