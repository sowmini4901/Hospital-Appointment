const express = require("express");
const router = express.Router();

const {isSignedIn, isAuthenticated, isAdmin}=require("../controllers/auth");
const {getUserById, pushBookInPurchaseList} = require("../controllers/user");
const {updateAvailable} = require("../controllers/doctor")
const {getOrderById, createOrder, getAllOrders, updateStatus, getOrderStatus} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId",getOrderById);


//actual routes
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushBookInPurchaseList, updateAvailable, createOrder);

//read
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders);

//status of order
router.get("/order/status/:userId", isSignedIn, isAuthenticated, getOrderStatus);
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticated, isAdmin, updateStatus);

module.exports=router;