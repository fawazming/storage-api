const express = require('express');
const router = express.Router();
const app = express();

// Import Each Controller
// const Home = require('../Controllers/Home');
const API = require('../Controllers/API');

app.use('/api', API);

// router.get('/', Home.index);

module.exports = [router,app];