const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('UI Coming Soon. Navigate to /users to see authorized faculty.');
});

module.exports = router;
