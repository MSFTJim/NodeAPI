var express = require('express');
var router = express.Router();

var BoboMess = 'I knew you could guess the word!';
/* GET home page. */
router.get('/', function(req, res, next) {  
  res.send(BoboMess);
});



module.exports = router;
