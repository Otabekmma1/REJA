console.log("Web Server runned");

const express = require('express');
const app = express();

//MongoDb call
const db = require("./server").db();


//1:Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2:Session code
//3:Views code
app.set('views', 'views');
app.set('view engine', 'ejs');

//4:Routing code
app.get("/", function(req, res) {
    res.render('reja');
});

app.post('/create-item', (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
})


module.exports = app;