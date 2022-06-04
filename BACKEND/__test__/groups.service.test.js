require('dotenv').config();
const mongoose = require("mongoose");
const GroupsService = require("../services/groups.service");

describe("Get All Groups", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
    });

    test("Get all Groups", async() => {
        const groups = await GroupsService.getGroups();
        expect(groups).toEqual(expect.arrayContaining(groups));
    });

    

    afterAll(async done => {
        await mongoose.disconnect();
        done();
    });

});
