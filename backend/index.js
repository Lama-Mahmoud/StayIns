const { Router } = require('express');
const { login, addStayin,stayIn } = require('./controller/user');
const router = Router();

router.post("auth/login",login);
router.post("auth/addStayin",addStayin);
router.get("stayIns",stayIn)
