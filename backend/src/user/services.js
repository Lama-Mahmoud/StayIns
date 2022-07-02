const Admin = require ("../../models/Admin")



async function addAdmin(body, hashPassword) {
    
    const {
      name,
      email,
    } = body;
  
    const admin = new Admin({
      name,
      email,
      password: hashPassword
    });
  
    return await admin.save();
  }


async function getByEmail(email) {
    return await Admin.findOne({
      email
    });
  }



module.exports={
    getByEmail,
    addAdmin
}
