require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const axios = require('axios');

const app = express();


const postRouters = require("./routes/posts");
const homeRouters = require("./routes/home");
// Middleware
app.use(morgan("dev"));
app.use(express.static("public"));

// Routes
app.use("/api" , postRouters);
app.use("/home" , homeRouters);


app.get("/Ibrahim", (req,res) =>{
    res.send("Hello Worde");
});

app.get("/search", (req,res) =>{
    const { q } = req.query;
    res.send(`The Search for ${q}`);
});

app.get("/api", (req,res) =>{
   res.json({
      message: "This Is How Api Looks",
   });
});

// 404 Middleware (must be last)
app.use((req, res) => {
    res.status(404).send('Page Not Found <a href="/">Go To Home</a>');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});
