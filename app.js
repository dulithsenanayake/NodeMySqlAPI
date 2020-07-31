const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./configuration/config');
const dotenv = require('dotenv')
const cors = require('cors');

// listen to DB
db.authenticate()
    .then(() => console.log('MySQL Database Connected'))
    .catch(err => console.log('Error: ' + err) );

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/student',require('./routes/studentR'));

app.listen(5000);
