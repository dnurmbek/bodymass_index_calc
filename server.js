const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //oskab lugeda maha kasutaja andmed ja kasutada

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.post('/', function (req, res) {
    console.log(req.body);
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let index = weight / Math.sqrt(height) ;
    let msg = "Your body weight index is: " + index + "."

    if (index < 19 && index >0) {
        res.send(msg+ "This means that you are under healthy weight limit!"); 
    }
    else if (index >= 19 && index<25){
        res.send(msg+ "This means that you are in normal weight."); 
    }
    else if (index >= 25 && index<30){
        res.send(msg+ "This means that you are in overweight."); 
    }
    else if (index >= 30 && index<40){
        res.send(msg+ "This means that you are obese!"); 
    }
    else{
        res.send(msg+ "This index does not seem right. Check your input."); 
    }
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});