console.log("Web Server runned");

const express = require('express');
const app = express();

//MongoDb call
const db = require("./server").db('Reja');


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
    console.log("user entered /");
    db.collection('plans').find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render('reja', { items: data });
        }
    })
});

app.post('/create-item', (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
        if (err) {
             console.log("ERROR:", err);
             res.end('something went wrong');
        } else {
            res.redirect('/');
        }
    });
})
 

module.exports = app;