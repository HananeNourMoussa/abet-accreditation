const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/students', async (req, res, next) => {
    const { rows } = await db.query('SELECT * FROM STUDENT');
    res.send(rows);
});

router.get('/:section_id', async (req, res, next) => {
    const section_id = req.params.section_id;
    // TODO: write query to get student from a certain section, given by section_id
    const query = {
        text: 'Select * from student natural join enrollment where section_id = $1',
        values: [section_id]
    };
    const { rows } = await db.query(query);
    res.send(rows)
});

router.post('/new', async (req, res) => {
    const { std_id, first_name, last_name, major } = req.body;
    // TODO: write query to insert new student
    const query = {
        text: 'insert into student values ($1,$2,$3,$4)',
        values: [std_id, first_name, last_name, major]
    };
    const { rows } = await db.query(query);
    res.send(rows)
});

router.delete('/:std_id', async (req, res) => {
    const std_id = parseInt(req.params.std_id);
    // TODO: write query to delete student with std_id
    const query = {
        text: 'delete from student where std_id = $1',
        values: [std_id]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})

router.put('/:std_id', async (req, res) => {
    const std_id = parseInt(req.params.std_id);
    const { first_name, last_name, major } = req.body;
    // TODO: write query to update student
    const query = {
        text: 'update student set std_fname = $2, std_lname = $3, std_major = $4 where std_id = $1',
        values: [std_id, first_name, last_name, major]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})

router.get('/:assess_num/passing', async (req, res) => {
    const assess_num = parseInt(req.params.assess_num);
    // TODO: select students (their ids) with a passing grade on a specific assessment
    // note: process.env.ABET_THRESHOLD contains passing grade value
    const query = {
        text: 'select std_id from grade where assess_id = $1 and grade >= $2',
        values: [assess_num, process.env.ABET_THRESHOLD]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})

router.put('/:std_id/enroll/:section_id', async (req, res) => {
    const std_id = parseInt(req.params.std_id);
    const section_id = req.params.section_id;
    // TODO: create an enrollment record
    const query = {
        text: 'insert into enrollment values ($1,$2)',
        values: [std_id, section_id]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})

module.exports = router;
