var keystone = require('keystone');
keystone.init({

  'name': 'Practice CMS',

  'favicon': 'public/favicon.ico',
  'static': 'public',

  'views': 'templates/views',
  'view engine': 'jade',

  'auto update': true,
  'mongo': 'mongodb://localhost/keystonetest',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'some long string for a secret'

});

require('./models');

keystone.set('cloudinary config', process.env.CLOUDINARY_URL);

keystone.set('routes', require('./routes'));

keystone.start();
