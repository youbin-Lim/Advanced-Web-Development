const Employee = require('./employee');

class Developer extends Employee {
  constructor(name, email, developerId) {
    super(name, email); //from developer
    this.developerId = developerId;
    this.department = department;
  }
}

module.exports = Developer;