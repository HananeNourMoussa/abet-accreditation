const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/courses', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM COURSE');
  res.send(rows);
});

router.get('/:course/sections', async (req, res) => {
    const course = req.params.course;
    // TODO: query sections for 'course'
    const query = {
        text: 'Select * from section where course_code = $1',
        values: [course]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});
//NEW
router.get('/:professor/sections', async (req, res) => {
    const prof = req.params.professor;
    // TODO: query sections for 'prof'
    const query = {
        text: 'Select * from section where prof_id = $1',
        values: [prof]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});
router.delete('/deletecourse/:course', async (req, res) => {
    const course = req.params.course;
    // TODO: query to delete a course
    const query = {
        text: 'delete from course where course_code = $1',
        values: [course]
    };
    const { rows } = await db.query(query);
    res.send(rows);
})

router.delete('/deletesection/:section_id', async (req, res) => {
    // same stuff but for section
    const section = req.params.section_id;
    // TODO: query to delete a section
    const query = {
        text: 'delete from section where section_id  = $1',
        values: [section]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});

router.get('/outcomes', async (req, res) => {
    const { rows } = await db.query('select * from studentoutcome');
    res.send(rows);
});
//NEW
router.get('/outcomes/:outcome', async (req, res) => {
    const SO = req.params.outcome;
    // TODO: query sections for 'prof'
    const query = {
        text: 'Select * from studentoutcome where so_number = $1',
        values: [SO]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});
//NEW: get all SOs in section
router.get('/:section_id/outcomes', async (req, res) => {
    const sec_id = req.params.section_id;
    // TODO: query sections for 'prof'
    const query = {
        text: 'select so_number, so_description from section natural join course natural join studentoutcome where section_id = $1',
        values: [sec_id]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});
//NEW: get all assessments in section
router.get('/:section_id/assessments', async (req, res) => {
    const sec_id = req.params.section_id;
    // TODO: query sections for 'prof'
    const query = {
        text: 'select assess_id, assess_name from section natural join studentoutcome natural join assessment where section_id = $1',
        values: [sec_id]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});
router.post('/postoutcome/outcome', async (req, res) => {
    const { outcome_num, desc, assess_num, course_code } = req.body;
    // assess_num can initially be undefined
    // TODO: create new student outcome
    const query = {
        text: 'insert into studentoutcome values($1,$2,$3,$4)',
        values: [outcome_num,desc,assess_num, course_code]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});

router.delete('/deleteoutcome/:outcome', async (req, res) => {
    const outcome_num = parseInt(req.params.outcome);
    // TODO: delete an outcome
    const query = {
        text: 'delete from studentoutcome where so_number = $1',
        values: [outcome_num]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})

router.put('/putoutcome/:outcome', async (req, res) => {
    const outcome_num = parseInt(req.params.outcome);
    const {desc, assess_num} = req.body;
    // TODO: update an outcome
    // this will be used to map outcome to assessment
    const query = {
        text: 'update studentoutcome set so_description = $2, assess_id = $3 where so_number = $1',
        values: [outcome_num,desc,assess_num]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})

//NEW: Create assessment
router.post('/postassess/assess', async (req, res) => {
    const {assess_id, assess_name} = req.body;
    // assess_num can initially be undefined
    // TODO: create new student outcome
    const query = {
        text: 'insert into assessment values($1,$2)',
        values: [assess_id, assess_name]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});

//NEW: View assessment
router.get('/assessments/:assess', async (req, res) => {
    const assess_id = req.params.assess;
    // TODO: query sections for 'prof'
    const query = {
        text: 'Select * from assessment where assess_id = $1',
        values: [assess_id]
    };
    const { rows } = await db.query(query);
    res.send(rows);
});

//New: modify assessment
router.put('/putassess/:assess', async (req, res) => {
    const assess_id = parseInt(req.params.assess);
    const {assess_name} = req.body;
    // TODO: update an outcome
    // this will be used to map outcome to assessment
    const query = {
        text: 'update assessment set assess_id = $2 where assess_id = $1',
        values: [assess_id, assess_name]
    };
    const { rows } = await db.query(query);
    res.send(rows)
})
router.post('/grade/new', async (req, res) => {
    const { std_id, assess_num, grade } = req;
    // TODO: write query to insert new grade given these parameters
    const query = {
        text: 'insert into grade values($1,$2,$3)',
        values: [std_id, assess_num, grade]
    };
    const { rows } = await db.query(query);
    res.send(rows)
});

module.exports = router;
