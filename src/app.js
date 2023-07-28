const express = require("express");
const path = require("path");
const app= express();
const hbs= require("hbs"); 
const port= process.env.PORT || 3000;   //for hosting purpose

//public static path.

const staticPath= path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partial_Path=path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partial_Path);

app.use(express.static(staticPath)); 


//routing
app.get("",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg: "Oops! Page Not Found"
    });
})

app.listen(port,()=>{
    console.log(`Listning to the port at ${port}`);
})
