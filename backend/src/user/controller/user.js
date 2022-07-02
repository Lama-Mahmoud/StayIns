const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../../model/User');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";



async function signup(req, res) {
    try {
      console.log(req.body);
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
  
      const addAdminResult = await addAdmin(req.body, hashPassword);
      console.log('addUserResult =>', addUserResult);
      
      return res.send({ admin: addAdminResult._id });
    } catch (error) {
      console.log(error);
    }
  }

  async function login(req, res) {
    try {
      const user = await getByEmail(req.body.email);
      if (!user) return res.status(400).send('invalid credentials');
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(400).send('invalid credentials');
  
      const token = jwt.sign(
        {_id: user._id, name: user.name, email: user.email},
        TOKEN_SECRET
      );
  
      return res.header('auth-token', token).send({authToken:token, id:user._id});
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }


  module.exports={
    login,
    signup
  }