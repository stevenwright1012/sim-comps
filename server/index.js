const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const con = require('./controller')
require ('dotenv').config();

const {CONNECTION_URI} = process.env


const app = express();
app.use(bodyParser.json())

massive(CONNECTION_URI).then(db => {  
    app.set('db', db)
})

app.get('/api/dogs', con.getDogs)

// app.get('/api/cart', con.getCart)
// app.post('/api/addtocart/:id', con.addToCart)
// app.put('/api/editcart', con.editCart)
// app.delete('/api/remove/:id', con.remove)
// app.delete('/api/empty', con.emptyCart)

app.listen(3005, () => console.log("Listening on 3005"))