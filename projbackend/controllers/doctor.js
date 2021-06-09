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

exports.getDoctorsByCategory=(req, res)=>{
 
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

exports.getDoctor=(req, res)=>{
    req.doctor.photo=undefined;
    return res.json(req.doctor);
}


//middlewares
exports.photo = (req, res, next)=>{
    if(req.doctor.photo.data){
        res.set("Content-Type", req.doctor.photo.contentType)
        return res.send(req.doctor.photo.data);
    }
    next();
}

//deleting the doctor

exports.deleteDoctor = (req, res)=>{
    let doctor = req.doctor;
    doctor.remove((err, deletedDoctor)=>{
        if(err){
            return res.status(400).json({
                error: "Failed to delete the dcotor"
            })
        }
  
        res.json({
            message: "Deletion was a success",
            deletedDoctor
        })
    })
}


//updating the doctor
exports.updateDoctor = (req, res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions=true;

    form.parse(req, (err, fields, file)=>{
     if(err){
         return res.status(400).json({
             error: "Problem with the image"
         })
     }

 
 //Todo restrictions on field
 let doctor=req.doctor;
 doctor = _.extend(doctor, fields);


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
             error:"updating of  doctor in DB failed"
         })
     }

     res.json(doctor);
 });

    });
}

//product listing

exports.getAllDoctors=(req, res)=>{
    let limit= req.query.limit ? parseInt(req.query.limit): 8
    let sortBy = req.query.sortBy ? req.query.sortBy: "_id";
    Doctor.find().select("-photo").populate("category").sort([[sortBy, "asc"]]).limit(limit).exec((err, doctors)=>{
        if(err){
            return res.status(400).json({
                error:"Unable to retrieve data from db"
            })
        }
        res.json(doctors);
    })
};

exports.getAllUniqueCategories = (req, res)=>{
    Doctor.distinct("category",{}, (err, category)=>{
        if(err){
            return res.status(400).json({
                error: "NO category found"
            })
        }
        res.json(category);
    });
};

//middleware for frontend
exports.updateAvailable = (req, res, next)=>{
   let myOperations = req.body.order.products.map(prod=>{
     return {
         updateOne:{
             filter:{id: prod._id},
             update:{$inc: {available: -prod.count, booked: +prod.count}}
         }
     }
   })

   Doctor.bulkWrite(myOperations,{}, (err, doctors)=>{
     if(err){
         return res.status(400).json({
             error: "Bulk Operations failed"
         })
     }
     next();
   });

}

