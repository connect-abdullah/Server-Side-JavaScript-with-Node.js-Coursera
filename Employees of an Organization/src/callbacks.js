const { get } = require("http");

// Just for testing. You can remove this.
const employees = [
  { name: "Adam", designation: "Manager" },
  { name: "Harry", designation: "Developer" },
];
const employee = { name: "John", designation: "Developer" };

// Define a getEmployee function that iterates over the employees list and displays it
// Employees must be displayed after a timeout of 1 second. Done
const getEmployee = (employees, callback) => {
  setTimeout(() => {
    const employeeNames = employees.map((employee) => employee.name)

    callback(null, employeeNames);
  }, 1000);
};

getEmployee(employees, (err, result) => {
  if (err) {
    console.log(err);
  }
  return result;
});

// Define a function that creates a new employee after 2 seconds.
// and then makes a call to callback function to display the same.
const createEmployee = (employees, employee, callback) => {
  setTimeout(() => {
    // write your code here to push new employee to employees list and return a callback.
    employees.push(employee);
    return callback(null, employees);
  }, 2000);
};

/* createEmployee(employees, employee, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
    });
 */
module.exports = { getEmployee, createEmployee };
