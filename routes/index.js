var express = require('express');
var router = express.Router();

/* GET home page.  */
router.get('/', function(req, res) {
  //res.render('index', {title:'Where is Charles Manson?'});
  res.render('index.html')
});


module.exports = router;
