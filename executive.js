const Employee = require('./employee');

class Executive extends Employee {
  constructor(name, salary, dept) {
    super(name, salary, dept)
    this.subordinates = [];
  }

  hireEmployee(employee) {
    // adds employee to the executives' array of suborinates
    this.subordinates.push(employee);
    // `this` refers to executive calling this method 
    // assigns exec as the employees' boss
    employee.assignBoss(this);
  }

  giveRaises(raiseAmount) {
    // give each employee a raise
    this.subordinates.forEach((employee) => {
      employee.receiveRaise(raiseAmount)
    });
  }
}



// let bob = new Employee('Bob Mike', 500, 'engineering');
// let sarah = new Executive('Sarah', 500, 'sales');
// sarah.hireEmployee(bob);
// console.log(sarah);
// console.log(bob);
module.exports = Executive;