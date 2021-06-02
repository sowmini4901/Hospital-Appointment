const express = require("express");
const router = express.Router();

const {isSignedIn, isAuthenticated, isAdmin}=require("../controllers/auth");
const {getUserById, pushBookInPurchaseList} = require("../controllers/user");
const {updateAvailable} = require("../controllers/doctor")
const {getOrderById} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId",getOrderById);


//actual routes

module.exports=router;