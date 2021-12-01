const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/', async (req, res, next) => {
    const { rows } = await db.query('SELECT * FROM STUDENTS');
    res.send(rows);
});

router.get('/:section_id', async (req, res, next) => {
    const section_id = parseInt(request.params.section_id);
    // TODO: write query to get student from a certain section, given by section_id
    const { rows } = await db.query('');
    res.send(rows);
});

router.post('/new', async (req, res) => {
    const { std_id, first_name, last_name, major } = req.body;
    // TODO: write query to insert new student
    const { rows } = await db.query('');
    res.send(rows);
});

router.delete('/:std_id', async (req, res) => {
    const std_id = parseInt(req.params.std_id);
    // TODO: write query to delete student with std_id
    const { rows } = await db.query('');
    res.send(rows);
})

router.put('/:std_id', async (req, res) => {
    const std_id = parseInt(req.params.std_id);
    const { first_name, last_name, major } = req.body;
    // TODO: write query to update student
    const { rows } = await db.query('');
    res.send(rows);
})

router.get('/:assess_num/passing', async (req, res) => {
    const assess_num = parseInt(req.params.assess_num);
    // TODO: select students (their ids) with a passing grade on a specific assessment
    // note: process.env.ABET_THRESHOLD contains passing grade value
    const { rows } = await db.query('');
    res.send(rows);
})

router.put('/:std_id/enroll/:section_id', async (req, res) => {
    const std_id = parseInt(req.params.std_id);
    const section_id = req.params.section_id;
    // TODO: create an enrollment record
})

module.exports = router;
