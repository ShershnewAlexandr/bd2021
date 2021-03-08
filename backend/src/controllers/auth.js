const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Author = require('../models/Author');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({
        email: req.body.email,
    });
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id,
                role: candidate.role,
            }, keys.jwt, {
                expiresIn: 60 * 60,
            });
            res.status(200).json({
                token: `Bearer ${token}`,
                userId: candidate._id,
                role: candidate.role,
            })
        } else {
            res.status(401).json({
               message: "Wrong password"
            });
        }
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
};

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({
        email: req.body.email,
    });

    if (candidate) {
        res.status(409).json({
            message: "email was registered early",
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            role: 'user',
            password: bcrypt.hashSync(password, salt),
        });
        const author = new Author({
            userId: user._id,
        })
        try {
            await user.save();
            await author.save();
            res.status(201).json(user);
        } catch (e) {
            errorHandler(res, e);
        }
    }
};