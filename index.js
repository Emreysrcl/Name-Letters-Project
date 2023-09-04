
import express from "express";
import bodyParser from "body-parser";

const app= express();
const port = 3000;  
app.use(express.static("Name letters/public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs" , {numberOfLetters: numLetters});
});

app.listen(port,(req,res)=>{
  console.log(`server is running on ${port}`);
});