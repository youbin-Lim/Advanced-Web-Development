const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, email, internId,department,mentor) {
    super(name, email); //from Employee
    this.InternId = InternId;
    this.department = department;
    this.mentor = mentor;
  }
}

module.exports = Intern;