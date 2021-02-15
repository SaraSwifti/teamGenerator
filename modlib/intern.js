// constructing the subclass of intern
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school,) {
        super(name, id, email);
        this.school = school;

    }


getRole () {
    return "Intern";
}
getSchool(){
    return this.school;
}
};

//construct Intern
const intern = new Intern();

//at the very bottom for the index.js
module.exports = Intern;