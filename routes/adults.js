var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

router.get('/', function(req, res, next) {
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      // throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('adults', {
        moviesHeading : 'Movies',
        favsHeading : 'Favourites',
        title : 'Adult',
        message : 'You have not selected any favourites.',
        moviesData : result
      });
    }
  });
});

module.exports = router;
