var keystone = require('keystone'),
    Post = keystone.list('Post'),
    User = keystone.list('User');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
      locals = res.locals;

  view.on('init', function(next) {
    var query = Post.model.findOne({ slug: req.params.post })
      .populate('author');
    query.exec(function(err, result) {
      locals.post = result;
      next(err);
    });
  });

  view.render('post');

};
