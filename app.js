console.log("Web Server runned");

const express = require('express');
const app = express();

//MongoDb call
const db = require("./server").db('Reja').collection('plans');
const mongodb = require('mongodb');

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
    db.find().toArray((err, data) => {
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
    db.insertOne({reja: new_reja}, (err, data) => {
        if (err) {
            console.log("INSERT ERROR:", err);
            res.end("something went wrong");
        } else {
            res.json({_id: data.insertedId, reja: new_reja});
        };
    });
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;

    db.deleteOne({_id: new mongodb.ObjectId(id)}, (err, data) => {
        if (err) {
            console.log("DELETE ERROR:", err);
            res.end("somethin went wrong");
        } else {
            res.json({ status: "success" });
        }
    })
})

app.post('/edit-item', (req, res) => {
    const data = req.body;

    db.findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
        { $set: {reja: data.new_input} },
        function (err, data) {
            res.json({state: "success", data: data})
        }
    )
})

app.post('/delete-all', (req, res) => {
    db.deleteMany({}, (err, data) => {
        if (err) {
            console.log("ALL ITEMS DELETE ERROR:", err);
            res.end("somethin went wrong");
        } else {
            res.json({ deletedCount: data.deletedCount});
        }
    })
})

module.exports = app;