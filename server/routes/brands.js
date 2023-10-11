const Brand = require("../models/brands");
const router = require("express").Router();

router.get("/", async (req,res)=>{
    try{
const brands = await Brand.find();
res.status(200).json(brands);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router; 