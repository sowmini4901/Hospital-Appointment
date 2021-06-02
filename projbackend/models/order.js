const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const cartSchema = new mongoose.Schema({
    doctor:{
        type: ObjectId,
        ref: "Doctor"
    },
    name: String,
    count: Number,
    fees: Number
},{timestamps:true}
);
const cart = mongoose.model("Cart",cartSchema);

const bookSchema=new mongoose.Schema({
    products:[cartSchema],
    transaction_id: {},
    isCashOnDelivery: Boolean,
    amount: {type: Number},
    address: String,
    status: {
        type: String,
        default: "Upcoming",
        enum:["Cancelled", "Consulted", "Upcoming"]
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    } 
}, {timestamps:true}
);
const Order = mongoose.model("Book",bookSchema);


module.exports={Order,cart};