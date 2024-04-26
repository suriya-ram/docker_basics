const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send("app is working");
});

app.get("/user",(req,res)=>{
    res.json({
        name:"suriaya",
        age:24,
    });
});


app.listen(3000,() =>{
    console.log("server is up and running");
})