const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM professor');
  res.send(rows);
});
//NEW
router.get('/:professor_id', async (req, res) => {
  const prof_id = req.params.professor_id;
  // TODO: write query to get student from a certain section, given by section_id
  const query = {
      text: 'Select * from professor where prof_id = $1',
      values: [prof_id]
  };
  const { rows } = await db.query(query);
  res.send(rows)
});
module.exports = router;
