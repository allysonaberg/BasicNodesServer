var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for route1')
})

router.post('/', function(req, res) {
    res.send('POST handler for route1')
})

module.exports = router;