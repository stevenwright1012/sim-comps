const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const con = require('./controller')
require ('dotenv').config();

const {CONNECTION_URI} = process.env

//TOP LEVEL MIDDLEWEAR
const app = express();
app.use(bodyParser.json())

massive(CONNECTION_URI).then(db => {  
    app.set('db', db)
})


//REQUEST LEVEL MIDDLEWEAR
var addPercent = function (req, res, next) {
    req.search = req.query.dog + '%'
    next()
}

app.get('/api/dogs', con.getDogs)
app.get('/api/wishlist', con.getWishlist)
app.get('/api/search', addPercent, con.search)
app.post('/api/addwish/:id', con.addToWishlist)

app.listen(3005, () => console.log("Listening on 3005"))