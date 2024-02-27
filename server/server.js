// setup express
const express = require('express');
const app = express();

// dotenv
const dotenv = require('dotenv');
dotenv.config();

// set our port
const port = process.env.PORT || 3000;

// connect to database
const connectDB = require('./utils/db.js');
connectDB();

// Routes 
const authRoutes = require('./routes/authRoutes');

app.use('/api/v1/admin', authRoutes);

// listen for requests :)
app.listen(port, function () {
    console.log('Server is listening on PORT : ' + port);
});