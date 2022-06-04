require('dotenv').config();
const mongoose = require("mongoose");
const DocumentService = require("../services/documents.service");

describe("Get All Documents", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
    });

    test("Get all Documents", async() => {
        const documents = await DocumentService.getDocuments();
        expect(documents).toEqual(expect.arrayContaining(documents));
    });

    

    afterAll(async done => {
        await mongoose.disconnect();
        done();
    });

});
