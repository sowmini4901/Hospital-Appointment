const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema;
const doctorSchema = new mongoose.Schema({
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
    specialization:{
        type:String,
        required: true
    },
    fees:{
        type: Number,
        required:true,
        maxlength:32

    },
    category:{
       type: ObjectId,
       ref: "Category",
       required:true
    },
    available:{
        type: Number
    },
    booked:{
        type: Number,
        default:0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    appointments : {
        type: Array,
        default: []
    }
    
}, {timestamps:true});

module.exports = mongoose.model("Doctor",doctorSchema);