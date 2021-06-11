const braintree = require("braintree");
const { response } = require("express");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "x9j6q5cyjscs87gz",
  publicKey: "zpnjyxqrg2ycbjpv",
  privateKey: "4a92749aa05532835135ca0d76265d53"
});

exports.getToken=(req, res)=>{
    gateway.clientToken.generate({}, function(err, response){
        // pass clientToken to your front-end
        if(err){
            res.status(500).json(err)
        } else {
            res.send(response);
        }
      });
};

exports.processPayment=(req, res)=>{

    let nonceFromTheClient=req.body.paymentMethodNonce

    let amountFromTheclient=req.body.fees
    gateway.transaction.sale({
        amount: amountFromTheclient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
          if(err){
              res.status(500).json(err);
          }
          else{
              res.json(result);
          }
      });
}