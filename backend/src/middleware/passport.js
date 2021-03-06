const JwtStategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys');
const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('users');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt,
}

module.exports = passport => {
    passport.use(
        new JwtStategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.userId).select('email role id');
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        })
    )
}