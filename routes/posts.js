const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/posts" , async (req,res)=>{
    try{
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        res.json(response.data);
        console.log(response.data);   
    }
    catch(error){
        console.error("Error Fetching Data" , error);
        res.status(500).json({message : "Failde to Detch posts"})   
      
    }
})

module.exports = router;