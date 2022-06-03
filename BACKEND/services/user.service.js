const Admin = require('../models/admins.model');

const createAdmins = async (req, res) => {
    const admin = new Admin({
        name: 'admin',
        username: 'admin',
        password: 'admin123',
        isAdmin: true
    });

   

    let adminData;

    await admin.save().then((data) => {
        adminData = data;
    }).
        catch((err) => adminData = err.message);

    
    const dataToSend = {
        admin: adminData
       
    }

    res.status(200).send(dataToSend);
}