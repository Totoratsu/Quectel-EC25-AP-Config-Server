const express = require('express');
const path = require('path');
const routes = require('./routes');
const morgan = require('morgan');

const app = express();
const {
    PORT = 3000
} = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('views', path.join('src', 'views'));
app.set('view engine', 'pug');

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});