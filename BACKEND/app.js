const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');

const app = express();

app.use(bodyParser.json());

//MUST USE TO PREVENT CORS ERROR
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization, *');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.post('/Comments', mongoPractice.ADD); 
// ADD and getComments are functions from our mongo.js file
app.get('/Comments', mongoPractice.getComments);

app.listen(5000 || process.env.PORT); //Heroku provides port