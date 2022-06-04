require('dotenv').config();
const mongoose = require("mongoose");
const MarkingService = require("../services/marking.service");

describe("Get All Marking", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
    });

    test("Get all Marking", async() => {
        const markings = await MarkingService.getMarkings();
        expect(markings).toEqual(expect.arrayContaining(markings));
    });

    

    afterAll(async done => {
        await mongoose.disconnect();
        done();
    });

});
