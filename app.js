const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const date=require(__dirname+ "/date.js")
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
let items=["Meditate","Study","Workout"];
let workItems=[];
app.get("/", function (req, res) {
    // const d = new Date();
    // const dayInNumeric = d.getDay();
    // var day="";
    // switch (dayInNumeric) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:

    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";

    //         break;
    //     case 3:

    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";

    //         break;
    //     case 5:
    //         day = "Friday";

    //         break;
    //     case 6:
    //         day = "Saturday";

    //         break;

    //     default:
    //         console.log("ERROR!!!");
    //         break;
    // }

    // let options={
    //     weekday:"long",
    //     day:"numeric",
    //     month:"long"
    // };
    // const day=d.toLocaleDateString("en-US",options);
    // const day=new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long"/*, hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'*/});
    // console.log(getDate);
    let day=date.getDay();
    res.render("list", { listTitle: day , allItems: items });
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",allItems:workItems});
})

// app.post("/work",function(req,res){
//     let newItem=req.body.newItem;
//     workItems.push(newItem);
//     res.redirect("/work");
//     })

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
let newItem=req.body.newItem;
if(req.body.bton==="Work"){
    workItems.push(newItem);
res.redirect("/work");
}
else{

    items.push(newItem);
    res.redirect("/");
}
})

app.listen(3000, function () {
    console.log("The server is up and running on port number 3000.");
})