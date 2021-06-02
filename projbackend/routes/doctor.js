var express = require("express");
var router=express.Router();

const {getDoctorById, createDoctor}=require("../controllers/doctor");
const {isSignedIn, isAuthenticated, isAdmin}=require("../controllers/auth");
const {getCategoryById}=require("../controllers/category");
const {getUserById}=require("../controllers/user");
//params
router.param("userId",getUserById);
//router.param("categoryId",getCategoryById);
router.param("doctorId",getDoctorById);

//routes
router.post("/doctor/create/:userId",isSignedIn, isAuthenticated, isAdmin, createDoctor);


module.exports=router;