const express = require('express');
const app = express();
// const hbs = require('express-handlebars');
// const bodyParser = require('body-parser');
require('dotenv').config();

// Template Engine handlebars
// hbs.create({defaultLayout: 'main'});
// app.engine('handlebars', hbs.engine());
// app.set('view engine', 'handlebars');
// app.set('views', './Views');

app.use(express.urlencoded({ extended: true }));

// Set static folder
app.use(express.static('./public'));

// Router Initialized
app.use(require('./Config/Routes'));


app.listen(process.env.PORT, ()=>console.log(`Go to http://localhost:${process.env.PORT}`));
