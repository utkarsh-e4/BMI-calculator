const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var rest = num1 + num2;

    res.send("Sum of the numbers is: " + rest);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", function(req, res){
    var wt = parseFloat(req.body.w);
    var ht = parseFloat(req.body.h);

    var result = wt/Math.pow(ht,2);

    res.send("Your BMI is " + result);
});

app.listen(3000, function(){
    console.log("Server started at 3000");
});