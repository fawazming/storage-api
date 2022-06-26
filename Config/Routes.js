const express = require('express');
const router = express.Router();
const app = express();

// Import Each Controller
// const Home = require('../Controllers/Home');
const API = require('../Controllers/API');
const User = require('../Controllers/User');

app.use('/api', API);
app.use('/u', User);

// router.get('/', Home.index);

module.exports = [router,app];