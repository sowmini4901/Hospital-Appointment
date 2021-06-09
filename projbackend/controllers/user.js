
const User = require("../models/user");
const Order=require("../models/order");

exports.getUserById = (req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user){
            return res.status(400).json({
                error: "No user was found in DB"
            })
        }
        req.profile=user
        next();
    });
};

exports.getUser = (req, res)=>{
    //TO do get back here for password
    req.profile.salt=undefined;
    req.profile.encry_password=undefined;
    req.profile.createdAt=undefined;
    req.profile.updatedAt=undefined;
     return res.json(req.profile);
};

exports.getAllUsers = (req, res)=>{
  User.find().exec((err, user)=>{
  req.profiles=user
  return res.json(req.profiles);
  })
};

//updating user data
exports.updateUser =(req, res)=>{
    User.findByIdAndUpdate(
        {_id : req.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify: false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error: "You are not authorised to update this user"
                })
            }
            user.salt=undefined;
            user.encry_password=undefined;
            user.createdAt=undefined;
            user.updatedAt=undefined;
            res.json(user);
        }
    )
};

//user booked appointments
exports.userBookedList=(req, res)=>{
     Order.find({user: req.profile._id}).populate("user", "_id name")
     .exec((err, order)=>{
      if(err){
          return res.status(400).json({
              error:"No Appointment booked in this account"
          })
      }

      return res.json(order);
     })
};


//middleware
exports.pushBookInPurchaseList=(req, res, next)=>{
   
    let appointments=[]
    req.body.order.products.forEach(item=>{
        appointments.push({
            _id: item._id,
            name: item.name,
            description: item.description,
            catergory: item.category,
            quantity: item.quantity,
            amount: req.body.order.amount,
            transaction_id: req.body.order.transaction_id
        });
    });


    //store in DB
    User.findOneAndUpdate(
        {_id: req.profile._id},
        {$push: {appointments: appointments}},
        {new: true},
        (err, appointments)=>{
             if(err){
                 return res.status(400).json({
                     error: "Unable to save appointments"
                 })
             }
             next();
        }
    );

};
