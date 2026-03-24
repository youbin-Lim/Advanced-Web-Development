const Student = require('../models/student');
const students = require('../data/studentData');

// Add student
exports.addStudent = (req, res) => {
  const { name, email, studentId } = req.body;

  const newStudent = new Student(name, email, studentId);
  students.push(newStudent);

  res.json({
    message: "Student added successfully",
    data: newStudent
  });
};

// Get all students
exports.getStudents = (req, res) => {
  res.json(students);
};

// Get single student
exports.getStudentById = (req, res) => {
  const id = req.params.id;

  const student = students.find(s => s.studentId === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
};

// Delete student
exports.deleteStudent = (req, res) => {
  const id = req.params.id;

  const index = students.findIndex(s => s.studentId === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({ message: "Student deleted successfully" });
};