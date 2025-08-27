const express = require("express");
const router = express.Router();
const path = require("path");

// Routes
router.get("/", (req,res)=>{
    console.log("This Is File Path" , __filename);
    res.sendFile(path.join(__dirname , "../public/getStarted.html"));
});

module.exports = router;