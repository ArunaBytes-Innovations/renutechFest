const User = require('../models/User');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const errorHandler = require('../middlewares/errorHandler');

// register user
const register = errorHandler(async (req, res) => {
    const user = req.body;

    // check if user already exists

    const oldUser = await User.findOne({ email: user.email });

    if (oldUser) {
        res.status(409).json({ message: 'User already exists' });
    }

    // save user to database
    const newUser = new User(user);
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_KEY);

    res.status(201).json({ userId: newUser._id, token, user: newUser });
});

// login user
const login = errorHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(404).json({ message: 'User not Registerd' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        res.status(401).json({ message: 'Invalid Password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);

    res.status(200).json({ token, user });

});


module.exports = { register, login };