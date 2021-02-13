const Intern = require("../modlib/intern");
//test for School
//Test for Github Name
describe("intern", () => {
    describe("Initialization intern class", () => {
        it("should make an intern added in the intern subclass", () => {
            const oneIntern = new Intern;
            expect(oneIntern).toEqual(new Intern)
        })
    })
});