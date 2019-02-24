const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routesAdmin = require('./routes/admin');
const routesShop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin',routesAdmin);
app.use(routesShop);

//error not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
})