const jwt = require('jsonwebtoken');

// Configuring Enviroment variables
require('dotenv').config();

const secretKey = process.env.JWT_KEY;

// Middleware function to authenticate users
const authenticateUser = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        // Check if the token is invalid
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        // Attach the decoded user information to the request object
        req.user = decoded.user;
        next();
    });
};

module.exports = authenticateUser;