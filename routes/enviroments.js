var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const envs = process.env;
  const envArray = Object.keys(envs)
    .map((key) => {
      return {
        key,
        value: envs[key]
      }
    });
  res.json(envArray);
});

module.exports = router;
