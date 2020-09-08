require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({

    });
});

app.listen(process.env.PORT, () => {
    console.log('hi');
});