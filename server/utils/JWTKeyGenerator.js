const crypto = require('crypto');

// Function to generate a random JWT key
const generateJwtKey = () => {
    const keyLength = 32; // You can adjust the key length as needed
    const randomBytes = crypto.randomBytes(keyLength);
    const jwtKey = randomBytes.toString('hex');
    return jwtKey;
};

// Generate and print the JWT key
const jwtKey = generateJwtKey();
console.log('Generated JWT Key:', jwtKey);