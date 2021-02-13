const Manager = require("../modlib/manager")
// test Github user
//test Office number
describe("Manager", () => {
    describe("Initialization Manager class", () => {
        it("should make a employee added in the manager subclass", () => {
            const oneManager = new Manager;
            expect(oneManager).toEqual(new Manager)
        })
    })
});