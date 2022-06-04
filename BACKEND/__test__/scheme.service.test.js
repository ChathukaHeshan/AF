require('dotenv').config();
const mongoose = require("mongoose");
const SchemeService = require("../services/scheme.service");

describe("Get All Schemes", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
    });

    test("Get all Schemes", async() => {
        const schemes = await DocumentService.getSchemes();
        expect(schemes).toEqual(expect.arrayContaining(schemes));
    });

    

    afterAll(async done => {
        await mongoose.disconnect();
        done();
    });

});
