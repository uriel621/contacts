var express = require("express");
var app = express();

//For The HTML Template
app.use(express.static(__dirname + "/public"));

app.get("/contactList", function(req, res){
    console.log("I received a GET request")
    
    person1 = {
        name: "Tim",
        email: "tim@gmail.com",
        number: 5555555555
    }
    person2 = {
        name: "Tqqqqqqqqqqim",
        email: "tim@gmqqqqqqqqqqail.com",
        number: 55555555555555555555555511111111111115555
    }
    person3 = {
        name: "Ticcm",
        email: "tim@gmccail.com",
        number: 5555555555
    }

    var contactList = [person1, person2, person3]
    res.json(contactList)
})

app.listen(3000);
    console.log("Server running on port 3000")
