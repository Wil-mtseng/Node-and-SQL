describe("Pool query", () => {

    // Add new visitor
    const { addNewVisitor } = require('../src/server')

    it('Save new visitor to database', async(done) => {

        let addVisitor = await addNewVisitor("WILFRED", "2020/11/20", "20:03:00", "Ghengis Khan", "Greatest empire on earth")

        expect(addVisitor[0].v_name).toEqual("WILFRED")
        expect(addVisitor[0].dateofvisit).toEqual("2020/11/20")
        expect(addVisitor[0].timeofvisit).toEqual("20:03:00")
        expect(addVisitor[0].assistant).toEqual("Ghengis Khan")
        expect(addVisitor[0].comments).toEqual("Greatest empire on earth")

        done()

    });


    //Test update visitor fucntion
    const { updateVisitor } = require('../src/server')

    it('Update visitor in database', async(done) => {

        let newVisitor = await updateVisitor("WILFRED", "2020/03/09", "20:03:00", "Ghengis Khan", "Greatest empire on earth")

        expect(newVisitor[0].v_name).toMatch("WILFRED")
        expect(newVisitor[0].dateofvisit).toMatch("2020/03/09")
        expect(newVisitor[0].timeofvisit).toMatch("20:03:00")
        expect(newVisitor[0].assistant).toMatch("Ghengis Khan")
        expect(newVisitor[0].comments).toMatch("Greatest empire on earth")

        done()

    });


    //Remove one visitor from database
    const { viewVisitor } = require('../src/server')

    it('Select and view a visitor in database', async(done) => {

        let newVisitor = await viewVisitor(86);

        expect(newVisitor[0].v_name).toBe("WILFRED")
        expect(newVisitor[0].dateofvisit).toBe("2020/03/09")
        expect(newVisitor[0].timeofvisit).toBe("20:03:00")
        expect(newVisitor[0].assistant).toBe("Ghengis Khan")
        expect(newVisitor[0].comments).toBe("Greatest empire on earth")

        done()

    });

});