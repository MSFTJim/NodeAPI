var express = require('express');
var router = express.Router();

var PiesforTim = '{\"YummyPies":[{"id": 1001,"Pie": "Apple"}, {"id": 1002,"Pie": "Blueberry"}, {"id": 1003,"Pie": "Peacan"}]}';
  

/* GET pie's */
router.get('/', function(req, res, next) {
  res.send(PiesforTim);
});

module.exports = router;
