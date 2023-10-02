const mongoose = require("mongoose");

const pendingUserSchema = new mongoose.Schema(
  {
    name: {
        //properties
        type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    status:{
      type:String // pending, active, rejected
    },
    image:{
      type:String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pending", pendingUserSchema);
