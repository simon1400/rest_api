const express = require('express');
const bodyParser = require('body-parser');
/*const db = require('./config/db');*/
const app = express();
const port = 8000;

const home = require('./server/routes/home.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const dirname = __dirname;

app.use('/', home);

app.listen(process.env.PORT || port, () => { 
	console.log('We are live on ' + (process.env.PORT || port)) 
})