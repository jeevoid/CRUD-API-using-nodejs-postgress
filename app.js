const express = require('express')
const app = express()
const port = 9006

const cookieparser = require('cookie-parser');
const bodyparser = require("body-parser")
const pg = require('./database/pgdbconnect')
const path = require("path")

app.set('view engine','ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({limit: '10mb',extended: false}));

app.use(cookieparser());
app.use(express.static(path.join(__dirname,'public')));



var routes = require('./routes/index')

app.use('/',routes)
app.listen(port, () =>{

    console.log("server started @",port)
})

