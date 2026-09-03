import express from "express";
import { student } from "../data/studentData.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(student);
});

router.get('/:id', (req, res) => {
    const students = student.find(s => s.id === parseInt(req.params.id));
    if (!students) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(students);
})

router.post('/', (req, res) => {
    const { name, age, grade } = req.body;
    if (!name || !age || !grade) {
        return res.status(400).json({ message: "Name, age, and grade are required" });
    }
    const newStudent = {
        id: student.length + 1,
        name,
        age,
        grade
    };
    student.push(newStudent);
    res.status(201).json({ message: "Student added successfully", student: newStudent });
})

export default router;