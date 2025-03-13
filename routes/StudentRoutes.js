

const express = require("express");
const router = express. Router();
const { Student } = require(" .. /models");

// Create a student
router.post("/students", async (req, res) => {
const student = await Student.create(req.body);
res.status(201).json(student);
});

// Get all students
router.get("/students", async (req, res) => {
const students = await Student.findA11();
res.json(students);
});

// Get student by ID
router.get("/students/:id", async (req, res) => {
const student = await Student.findByPk(req.params.id);
res.json(student);
});

// Update student
router.put("/students/:id", async (req, res) => {
await Student.update(req.body, { where: { id: req.params.id } });
res.json({ message: "Updated successfully" });
});

// Delete student
router.delete("/students/:id", async (req, res) => {
await Student.destroy({ where: { id: req.params.id } });
res.status(204).send();
});

module.exports = router;