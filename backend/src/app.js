const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
const routes = require('./routes');
const app = express();

mongoose.set('useFindAndModify', false);
mongoose.connect(keys.mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((error) => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;