var express = require('express');
var router = express.Router();

var MessWithTim = '[{"id": 1001,"Contact": "Jimbo"}, {"id": 1002,"Contact": "Timmy"}]';
  

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(MessWithTim);
});

module.exports = router;
