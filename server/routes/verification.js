const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

router.post("/confirm", async(req, res) => {
  try{
    const {code,token,expirationDate} = req.body;
    console.log(req.body);
    if(!(code === token)){
      return res.status(400).send({success:false, message:"Code is wrong"});
    }
    if(expirationDate < new Date()){
      return res.status(400).send({success:false, message:"Token has expired"});
    }
    
    return res.status(200).json({ message: "User Verified" });
  }
  catch(err){
    console.log(err);
    return res.status(500).send({success:false, message:"error"})
  }
});

router.post("/:email", async(req, res) => {
  const email = req.params.email;
  console.log(email)
    
  const token = Math.floor(1000 + Math.random() * 9999);
    const tokenExpiration = Date.now() + 3600000;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ranashairy492@gmail.com",
        pass: "gkxl zqpa stks hczb",
      },
    });

    const mailOptions = {
      from: "ranashairy492@gmail.com",
      to: email,
      subject: "Verification code for registration",
      html: `<p>You have requested to register on OFF. Here is your verification code.</p>
      <a href="${token}">${token}</a>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
       console.log("Error sending email:", error);
        res.status(500).json({ success:false, message: "An error occurred. Please try again later." });
      } else {
        console.log("Email sent:", info.response);
        res.json({ success:true ,message: "Email sent successfully.",token:{token:token,tokenExpiration:tokenExpiration} });
      }
    });
  }
);



module.exports = router;