const Razorpay = require('razorpay');

apiKey="rzp_test_SG9SqooioOQMwJ"
apiSecret="LxLIdTolOmYqctVfX1N9wO3C"


const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports = razorpay;