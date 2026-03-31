const { de } = require('date-fns/locale');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, email, ManagerId, department) {
    super(name, email); //from Employee
    this.ManagerId = ManagerId;
    this.department = department;
  }
}

module.exports = Manager;