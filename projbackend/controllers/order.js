const {Order, cart}=require("../models/order");



exports.getOrderById=(req, res, next, id)=>{
  Order.findById(id).populate("products.product", "name fees").exec((err, order)=>{
  if(err){
      return res.status(400).json({
          error:"Cannot find the order"
      })
  }
    req.order=order;
    next();
  })
}