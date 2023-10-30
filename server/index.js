const express = require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const paymentRoute = require("./routes/payment");
const brandsRoute = require('./routes/brands');
const wishlistRoute = require('./routes/wishlist')
const resetRoute = require('./routes/reset')
const reviewRoute= require('./routes/reviews');
const verificationRoute = require('./routes/verification')

dotenv.config();

const DB = 'mongodb+srv://shabbiralam45524:fakharalam110@cluster0.obk2i2j.mongodb.net/OFF';

app.use(cors());

mongoose.connect(DB,{}).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.log("no connection"));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/brands", brandsRoute);
app.use("/api/wishlist", wishlistRoute);
app.use('/api/reset', resetRoute);
app.use("/api/reviews",reviewRoute);
app.use("/api/verification",verificationRoute);

app.use(express.static("../client"));
app.use('/uploads', express.static('uploads'));

app.listen(5002, ()=>{
    console.log("backened is running");
});
