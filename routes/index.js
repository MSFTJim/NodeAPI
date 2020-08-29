var express = require('express');
var router = express.Router();
var fs = require('fs')

var HTML_FQN = process.cwd() + '/Tim.html';

// console.log(__dirname);
// console.log('process.cwd(): ', process.cwd());
// console.log(GotPath, fs.existsSync(HTML_FQN));
// console.log(__filename);

/* GET home page. */
router.get('/', (req, res) => {
  //res.sendFile('/home/codespace/workspace/myExpressApp' + '/Tim.html');
  res.sendFile(HTML_FQN);
  })

module.exports = router;
