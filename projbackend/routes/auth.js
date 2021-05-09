var express = require('express')
var router = express.Router()
const {signup, signout, signin} = require("../controllers/auth");
const {check, validationResult}=require("express-validator");
router.post("/signup",[
    check("name","name should be atleast 4 characters").isLength({min:4}),
    check("email","name should be atleast 4 characters").isEmail(),
    check("password","password should be atleast 8 characters").isLength({min:8})
],signup);

router.get("/signout",signout);
router.post("/signin",[
    check("email","name should be atleast 4 characters").isEmail(),
    check("password","password field is required").isLength({min:1})
],signin);

module.exports = router;