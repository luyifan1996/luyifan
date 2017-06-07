var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:name', function (req, res, next) {
    let theName = req.params.name
    res.send('{"string":'+ '"'+theName+'"' +',"length":'+theName.length + '}' );
})

router.param('name', function (req, res, next, value) {
    req.params.name
    next()
})

router.post('/', function (req, res, next) {
    let theName = req.params.mainstring
    res.send('{"string":'+ '"'+theName+'"' +',"length":'+theName.length + '}' );
})

module.exports = router;