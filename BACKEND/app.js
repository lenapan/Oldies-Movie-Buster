const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');
const mongo2 = require('./mongo2');

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
app.post('/Titles', mongo2.addTitles);

app.get('/Comments', mongoPractice.getComments);
app.get('/Titles', mongo2.retrieveTitles);

app.listen(5000 || process.env.PORT); //Heroku provides port