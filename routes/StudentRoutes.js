

// const express = require("express");
// const router = express. Router();
// const { Student } = require("../models");

// // Create a student
// router.post("/students", async (req, res) => {
// const student = await Student.create(req.body);
// res.status(201).json(student);
// });

// // Get all students
// router.get("/students", async (req, res) => {
// const students = await Student.findAll();
// res.json(students);
// });

// // Get student by ID
// router.get("/students/:id", async (req, res) => {
// const student = await Student.findByPk(req.params.id);
// res.json(student);
// });

// // Update student
// router.put("/students/:id", async (req, res) => {
// await Student.update(req.body, { where: { id: req.params.id } });
// res.json({ message: "Updated successfully" });
// });

// // Delete student
// router.delete("/students/:id", async (req, res) => {
// await Student.destroy({ where: { id: req.params.id } });
// res.status(204).send();
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const { Student } = require("../models");

// Create a student (POST /api/students)
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all students (GET /api/students)
router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a student by ID (GET /api/students/:id)
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student (PUT /api/students/:id)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.update(req.body, { where: { id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a student (DELETE /api/students/:id)
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Student.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Student not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
