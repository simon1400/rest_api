const router = require('express').Router();
const mongo = require('mongodb').MongoClient;
const config = require('../config.js');
const path = require('path');

const public = path.join(__dirname, '../../public');

mongo.connect(config.url, (err, db) => {

	router.get('/home', (req, res) => {
			
	})

	router.get('/home', (req, res) => {
		res.sendFile(path.join(public, 'add_uni.html'));	
	})

})


module.exports = router;