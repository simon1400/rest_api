const router = require('express').Router();
const mongo = require('mongodb').MongoClient;
const config = require('../config.js');
const mail = require('../mail/config.js');
const path = require('path');

const public = path.join(__dirname, '../../public');

mongo.connect(config.url, (err, db) => {

	router.post('/singup', (req, res) => {

		var mailOptions = {
		    from: "pechunka04@gmail.com",
		    to: req.body.state.email,
		    subject: "Hello",
		    text: "Hello world ✔",
		    html: "<b>Hello world ✔</b>"
		}

		mail.sendMail(mailOptions, function(error, response){
		    if(error)console.log('This error:     ' + error);
		});

		req.body.state.id = req.body.id;

		db.collection('user').insert(req.body.state)
		res.send(req.body.state)
	})

})


module.exports = router;