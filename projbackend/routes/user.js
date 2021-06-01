const express = require("express");
const router = express.Router();
const { getUserById, getUser, updateUser,userBookedList }=require("../controllers/user");
const {isSignedIn, isAuthenticated, isAdmin}=require("../controllers/auth");


router.param("userId", getUserById);
router.get("/user/:userId",isSignedIn, isAuthenticated, getUser);
//router.get("/user",getAllUsers);
router.put("/user/:userId",isSignedIn,isAuthenticated, updateUser);
router.get("/booked/user/:userId",isSignedIn,isAuthenticated, userBookedList);


module.exports=router;



