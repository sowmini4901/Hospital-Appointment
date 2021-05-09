const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength:32
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxlength:2500 
    },
    price:{
        type: Number,
        required:true,
        maxlength:32

    },
    category:{
       type: ObjectId,
       ref: "Category",
       required:true
    },
    instock:{
        type: Number
    },
    sold:{
        type: Number,
        default:0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    size: {
        type:String
    } 
}, {timestamps:true});

module.exports = mongoose.model("Product",productSchema);