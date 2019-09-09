const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const users = require('./routes/api/users');
const Product = require('./models/Product');
const Comment = require('./models/Comment');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);
// Routes
app.use('/api/users', users);

app.get('/api/products', (req, res) => {
    Product.find({}, function(err, products) {
        if (err) {
            res.send('something went wrong!!!');
        }
        res.json(products);
    });
});

app.get('/api/comments', (req, res) => {
    Comment.find({}, function(err, comments) {
        if (err) {
            res.send('something went wrong!!!');
        }
        res.json(comments);
    });
});

app.post('/api/comments', (req, res) => {
    let comment = new Comment(req.body);
    comment.save();
    res.status(201).send(comment);
});

app.use(express.static(path.join(__dirname,"./../client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "./../client/build/index.html")) 
}) 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
