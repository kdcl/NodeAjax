var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', {title: 'GET test'});
});

router.post('/', function(req, res, next) {
    var obj = {};
  	console.log('body: ' + JSON.stringify(req.body));
  	res.send({ redirect: '/users' });
  	//res.redirect('/users');
});

module.exports = router;
