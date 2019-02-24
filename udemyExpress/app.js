const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Hello from Server!');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('You are on "/users" route!');
    res.send('<h1>Some users:</h1><ul><li>Max</li><li>Sam</li></ul>');
});

app.use('/', (req, res, next) => {
    console.log('You are in "/" route!');
    res.send('<h1>Server is run! You can also go to "/users" route!<h1>');
});

app.listen(3000);