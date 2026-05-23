const express = require('express');
const router = express.Router();

let students = [
    { id: 1, name: "Jithesh", age: 20 }
];

// GET all students
router.get('/', (req, res) => {
    res.json(students);
});

// GET single student
router.get('/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
});

// POST create student
router.post('/', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT update student
router.put('/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;

    res.json(student);
});

// DELETE student
router.delete('/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.json({ message: "Student deleted successfully" });
});

module.exports = router;
