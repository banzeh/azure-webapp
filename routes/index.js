var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const envs = process.env;
  const envArray = Object.keys(envs)
    .map((key) => {
      return {
        key,
        value: envs[key]
      }
    });


  res.render('index', { title: 'Express', envs: envArray, teste: 'aa' });
});

module.exports = router;
