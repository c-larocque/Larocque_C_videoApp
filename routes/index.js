var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

router.get('/', function(req, res, next) {
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);

  res.render('index', {
    moviesData: result
  });
}
});
});

module.exports = router;
