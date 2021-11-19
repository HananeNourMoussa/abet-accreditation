const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'UI Coming Soon. Navigate to /users to see authorized faculty.' });
});

module.exports = router;
