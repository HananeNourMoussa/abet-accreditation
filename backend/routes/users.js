const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/', async function(req, res, next) {
  const { rows } = await db.query('SELECT * FROM USERS');
  res.send(rows);
});

module.exports = router;
