const express = require('express');
const port = process.env.PORT || 9000;
const cookieparser = require('cookie-parser');
var cors = require('cors');
var bodyParser  = require('body-parser');

const app = express();
const path = require('path');
const db = require('./config/mongoose');
// db();
// const user = require('./models/college_data');



app.use(express.json());
app.use(express.urlencoded());// always write first as a middle ware
app.use(cors());
app.use(cookieparser());// this both middlewa re is needed to run before router
app.use('/',require('./routes/index_route'));
app.use(express.static('static'));
// app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log("Error to start server!!!");
        return;
    }

    console.log("Server is running on the port: ",port);
})