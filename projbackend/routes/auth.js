var express = require('express')
var router = express.Router()
const {signup, signout, signin, isSignedIn, isAdmin, isAuthenticated} = require("../controllers/auth");
const {check, validationResult}=require("express-validator");
router.post("/signup",[
    check("name","name should be atleast 4 characters").isLength({min:4}),
    check("email","name should be atleast 4 characters").isEmail(),
    check("password","password should be atleast 4 characters").isLength({min:4})
],signup);

router.post("/signin",[
    check("email","name should be atleast 4 characters").isEmail(),
    check("password","password field is required").isLength({min:1})
],signin);

router.get("/signout",signout);

router.get("/testroute",isSignedIn,(req,res)=>{
    res.json(req.auth);
});
module.exports = router;