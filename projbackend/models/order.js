const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const bookSchema=new mongoose.Schema({
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

const CartSchema = new mongoose.Schema({
    doctor:{
        type: ObjectId,
        ref: "Doctor"
    },
    name: String,
    count: Number,
    fees: Number
},{timestamps:true}
);

const Order = mongoose.model("Book",bookSchema);
const Prodcart = mongoose.model("Cart",CartSchema);

module.exports={Order,Prodcart};