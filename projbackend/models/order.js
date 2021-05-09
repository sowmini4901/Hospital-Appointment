const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const orderSchema=new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id: {},
    isCahsOnDelivery: Boolean,
    amount: {type: Number},
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    } 
}, {timestamps:true}
);

const ProdCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
},{timestamps:true}
);

const Order = mongoose.model("Order",orderSchema);
const Prodcart = mongoose.model("Prodcart",ProdCartSchema);

module.exports={Order,Prodcart};