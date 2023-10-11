const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");
const Product = require("../models/Product");

router.get("/", async (req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
       let wishlists;

       if(qNew){
        wishlists = await Wishlist.find().sort({createdAt: -1}).limit(1)

       }else if(qCategory){
        wishlists = await Wishlist.find({categories:{
            $in: [qCategory],
        },
    });
       }else{
        wishlists = await Wishlist.find();
       }
        res.status(200).json(wishlists);
    }catch(err){
       res.status(500).json(err)  
    }
});

router.post("/:id", async (req, res) => {
    try {
      const productId = req.params._id;
      // Find the document by its ID in the source collection
      const product = await Product.findById({productId});
      console.log(product)
  
      if (!product) {
        return res.status(404).json({ message: "Document not found in the source collection." });
      }
  
      // Create a new document in the target collection
      await Wishlist.create(product);
  
      res.status(200).json({ message: "Document copied to the target collection successfully." });
    } catch (error) {
      console.error("Error copying the document:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

module.exports = router;