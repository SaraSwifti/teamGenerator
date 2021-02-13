// construction the extension of the employee class with the manager subclass

const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum,) {
        super(name, id, email)
        this.officeNum = officeNum;

    }
};
//at the very bottom for the index.js
module.exports = Manager;