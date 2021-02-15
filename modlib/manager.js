// construction the extension of the employee class with the manager subclass

const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum,) {
        super(name, id, email)
        this.officeNum = officeNum;

    }
    getRole() {
        return "Manager";
    }
    getOfficeNum () {
        return this.officeNum;
    }
};
//construct manager
const manager = new Manager ();
//at the very bottom for the index.js
module.exports = Manager;