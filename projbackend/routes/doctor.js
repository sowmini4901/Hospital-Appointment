var express = require("express");
var router=express.Router();

const {getDoctorById, createDoctor, getDoctor, photo, deleteDoctor, updateDoctor, getAllDoctors, getAllUniqueCategories}=require("../controllers/doctor");
const {isSignedIn, isAuthenticated, isAdmin}=require("../controllers/auth");
const {getCategoryById}=require("../controllers/category");
const {getUserById}=require("../controllers/user");
//params
router.param("userId",getUserById);
//router.param("categoryId",getCategoryById);
router.param("doctorId",getDoctorById);

//create routes
router.post("/doctor/create/:userId",isSignedIn, isAuthenticated, isAdmin, createDoctor);
//read routes
router.get("/doctor/:doctorId", getDoctor);
router.get("/doctor/photo/:doctorId", photo);

//delete route
router.delete("/doctor/:doctorId/:userId",isSignedIn,isAuthenticated,isAdmin, deleteDoctor);

//update route
router.put("/doctor/:doctorId/:userId",isSignedIn,isAuthenticated,isAdmin,updateDoctor);

//listing route
router.get("/doctors", getAllDoctors);

router.get("/doctors/categories", getAllUniqueCategories);
module.exports=router;