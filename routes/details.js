var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

router.get('/:id', function(req, res, next) {
  //console.log('I hit this route');
  connect.query(`SELECT * FROM tbl_movies WHERE movies_trailer="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('details', {
        //rating : 'Not rated',
        moviesData: result[0]
      });
    }
  });
});

module.exports = router;
