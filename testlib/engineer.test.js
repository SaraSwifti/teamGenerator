const Engineer = require("../modlib/engineer");
//Test for Github Name
describe("Engineer", () => {
    describe("Initialization Engineer class", () => {
        it("should make an Engineer added in the Engineer subclass", () => {
            const oneEngineer = new Engineer;
            expect(oneEngineer).toEqual(new Engineer)
        })
    })
});