const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/courses', async (req, res, next) => {
  const { rows } = await db.query('SELECT * FROM COURSES');
  res.send(rows);
});

router.get('/:course/sections', async (req, res, next) => {
    const course = req.params.course;
    // TODO: query sections for 'course'
    const { rows } = await db.query('');
    res.send(rows);
});

router.delete('/:course', async (req, res) => {
    const course = req.params.course;
    // TODO: query to delete a course
    const { rows } = await db.query('');
    res.send(rows);
})

router.delete('/section_id', async (req, res) => {
    // same stuff but for section
});

router.get('/outcomes', async (req, res) => {
    const { rows } = await db.query('select * from studentoutcomes');
    res.send(rows);
})

router.post('/outcome', async (req, res) => {
    const { outcome_num, desc, assess_num } = req.body;
    // assess_num can initially be undefined
    // TODO: create new student outcome
})

router.delete('/:outcome', async (req, res) => {
    const outcome_num = parseInt(req.params.outcome);
    // TODO: delete an outcome
})

router.put('/:outcome', async (req, res) => {
    const outcome_num = parseInt(req.params.outcome);
    const { desc, assess_num } = req.body;
    // TODO: update an outcome
    // this will be used to map outcome to assessment
})

router.post('/grade/new', async (req, res) => {
    const { std_id, assess_num, grade } = req;
    // TODO: write query to insert new grade given these parameters
    const { rows } = await db.query('');
    res.send(rows);
});

module.exports = router;
