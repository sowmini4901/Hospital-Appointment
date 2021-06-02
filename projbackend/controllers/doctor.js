const Doctor = require("../models/doctor");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


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
     let form = new formidable.IncomingForm();
     form.keepExtensions=true;

     form.parse(req, (err, fields, file)=>{
      if(err){
          return res.status(400).json({
              error: "Problem with the image"
          })
      }

      //destructure the fields
  const {name, description, fees, category, available}=fields;
  
  if(!name || !description || !fees || !category || !available){
         return res.status(400).json({
             error:"Some fields are missing"
         });
  }
  
  //Todo restrictions on field
  let doctor=new Doctor(fields);
  

  //handle file in here
  if(file.photo){
      if(file.photo.size > 3000000){
          return res.status(400).json({
              error:"file size is too big!"
          })
      }
      doctor.photo.data = fs.readFileSync(file.photo.path);
      doctor.photo.contentType = file.photo.type;
  }

  //save to the DB
  doctor.save((err, doctor)=>{
      if(err){
          return res.status(400).json({
              error:"Saving doctor in DB failed"
          })
      }

      res.json(doctor);
  })

     });
};
