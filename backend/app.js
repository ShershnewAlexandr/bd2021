const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const infoRoutes = require('./routes/info');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURL, { useUnifiedTopology: true })
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

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/info', infoRoutes);

module.exports = app;