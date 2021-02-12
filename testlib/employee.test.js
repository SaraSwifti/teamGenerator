// test for Name
//test for ID
//test for Email

const Employee = require("../modlib/employee");
// here is my template from other code to work through:
describe("Employee", () => {
    describe("Initialization employeed class", () => {
        it("should make a new employee", () => {
            const mainEmp = new Employee;
            expect(mainEmp).toEqual(new Employee)
        })
    })
})
