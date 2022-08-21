const express = require('express');
const path = require('path');
const app = express();
require('./db/conn');
const port = process.env.PORT || 8000;


const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));  //telling the express that we are going to use static files i.e, html and css
app.set("view engine" , "hbs") //telling the express that we are going to use view engine i.e, handleBars(hbs) 


app.get('' , (req , res)=>{
    res.render('index');
});

app.listen(port , (err)=>{
    if(err){
        console.log(`error connecting to server ${err}`);
    }
    console.log(`Server is running on port no. :: ${port}`)
});