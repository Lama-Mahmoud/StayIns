const { Router } = require('express');
const { login, signup } = require('./controller/user');
const router = Router();

router.post("/auth/login",login);
// this route is used oly to create admin
router.post("/signup",signup);
//router.post("auth/addStayin",addStayin);
//router.get("stayIns",stayIn);
//router.post("favourit",fav);


module.exports = router;
