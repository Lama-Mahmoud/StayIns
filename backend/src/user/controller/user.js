const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const {  addAdmin, getByEmail,addStay, getAll} = require('../services');


async function signup(req, res) {
    try {
        console.log(req.body);
        console.log("Hello");
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
  
      const addAdminResult = await addAdmin(req.body, hashPassword);
      console.log('addUserResult =>', addAdminResult);
      
      return res.send({ admin: addAdminResult._id });
    } catch (error) {
      console.log(error);
    }
  }

  async function login(req, res) {
    try {
      const admin = await getByEmail(req.body.email);
      if (!admin) return res.status(400).send('invalid credentials');
  
      const validPassword = await bcrypt.compare(req.body.password, admin.password);
      if (!validPassword) return res.status(400).send('invalid credentials');
  
      const token = jwt.sign(
        {_id: admin._id, name: admin.name, email: admin.email},
        TOKEN_SECRET
      );
  
      return res.header('auth-token', token).send({authToken:token, id:admin._id});
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  async function addStayin(req,res){
    try{
        console.log(req.body)
        const stay=await addStay(req.body);
        console.log('stay =>', stay);
      
      return res.send({ stay: stay._id });
    }
    catch(error){
        console.log(error)
    }
  }

  async function stayIn(res){
    try{
    const result= await getAll();
    res.send({stays:result});
    }catch(error){
        console.log(error);
    }
    
  }


  module.exports={
    login,
    signup,
    addStayin,
    stayIn
  }