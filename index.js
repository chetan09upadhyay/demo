 

const express = require('express');
const app = express();

// Your routes and middleware here
app.get('/', (req, res) => res.send('Hello from backend!'));

// Export for Vercel serverless
module.exports = app;