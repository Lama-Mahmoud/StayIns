const Admin = require ("../../models/Admin");
const Stay = require("../../models/Stay");
const Fav = require("../../models/Fav");



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
  

async function addStay(body){
    const{
        name,
        price,
        rate,
        features,
        admin,
        urls
    }=body
    const stay= new Stay({
        name,
        urls,
        features,
        price,
        rate,
        admin
    })
    return await stay.save();
}


async function getByMac(mac) {
    return await Fav.findOne({
      mac
    });
  }


async function addMac(body) {
    const macAddress= body;
    const mac=new Fav({macAddress})
    return await mac.save();
  }
  
async function getAll(){
    return await Stay.find({});
}

module.exports={
    getByEmail,
    addAdmin,
    addStay,
    getByMac,
    addMac,
    getAll
}
