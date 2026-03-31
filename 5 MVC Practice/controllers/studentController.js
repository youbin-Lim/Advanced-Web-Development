const { getStudents, saveStudents } = require('../models/studentData');

// Add student
exports.addStudent = (req, res, next) => {
  try {
    const { name, email, studentId } = req.body;

    if (!name || !email || !studentId) {
      const error = new Error("All fields are required");
      error.status = 400;
      throw error;
    }

    const students = getStudents();
    const exists = students.find(s => s.studentId === studentId);
    if (exists) {
      const error = new Error("Student already exists");
      error.status = 409;
      throw error;
    }

    const newStudent = { name, email, studentId };
    students.push(newStudent);
    saveStudents(students);

    res.status(201).json({ message: "Student added successfully", data: newStudent });
  } catch (err) {
    next(err);
  }
};

// Get all students
exports.getStudents = (req, res, next) => {
  try {
    const students = getStudents();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

// Get single student
exports.getStudentById = (req, res, next) => {
  try {
    const id = req.params.id;
    const students = getStudents();
    const student = students.find(s => s.studentId === id);

    if (!student) {
      const error = new Error("Student not found");
      error.status = 404;
      throw error;
    }

    res.json(student);
  } catch (err) {
    next(err);
  }
};

// Delete student
exports.deleteStudent = (req, res, next) => {
  try {
    const id = req.params.id;
    const students = getStudents();
    const index = students.findIndex(s => s.studentId === id);

    if (index === -1) {
      const error = new Error("Student not found");
      error.status = 404;
      throw error;
    }

    students.splice(index, 1);
    saveStudents(students);

    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    next(err);
  }
};