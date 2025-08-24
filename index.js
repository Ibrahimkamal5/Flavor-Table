require('dotenv').config();

const express = require("express");

//^ create a server using express
const app = express();

app.get("/Ibrahim" , (req,res) =>{
    res.send("Hello Worde")
})

//^ start the server and listen to the port
const port = process.env.port || 3000;
app.listen(port , () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

