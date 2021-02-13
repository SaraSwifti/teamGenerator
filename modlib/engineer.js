const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github,) {
        super(name, id, email)
        this.github = github;

    }
};

//at the very bottom for the index.js
module.exports = Engineer;