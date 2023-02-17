class NewsController {
  //[GET] /news
  index(req, res, next) {
    res.render('news');
  }
  //[GET] /news/:slug
  show(req, res, next) {
    res.send('HIIIIIIIIIIIIIIIIIIII');
  }
}

module.exports = new NewsController();
