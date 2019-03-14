const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routesAdmin = require('./routes/admin');
const routesShop = require('./routes/shop');
const errorsController = require('./controllers/errors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin', routesAdmin);
app.use(routesShop);

//error not found
app.use(errorsController.get404Page);

app.listen(3000, () => {
    console.log('listening on port 3000...');
})