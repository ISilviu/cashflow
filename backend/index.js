const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Express and Typescript.');
});

app.listen(port, () => console.log('App is running.'));