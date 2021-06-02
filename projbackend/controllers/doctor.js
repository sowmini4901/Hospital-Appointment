const Doctor = require("../models/doctor");

exports.getDoctorById=(req, res, next, id)=>{
    Doctor.findById(id)
    .populate("category").exec((err, doctor)=>{
        if(err){
            return res.status(400).json({
                error: "Doctor not found in DB"
            });
        }
        req.doctor = doctor;
        next();
    });
}


exports.createDoctor=(req, res)=>{
    
}
