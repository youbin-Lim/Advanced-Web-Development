const Person = require('./person');

class Student extends Person {
  constructor(name, email, studentId) {
    super(name, email); //from person
    this.studentId = studentId;
  }
}

module.exports = Student;