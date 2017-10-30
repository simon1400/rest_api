const router = require('express').Router();
const mongo = require('mongodb').MongoClient;
const config = require('../config.js');
var nodemailer = require('nodemailer');
const path = require('path');

const public = path.join(__dirname, '../../public');

mongo.connect(config.url, (err, db) => {

	router.post('/singup', (req, res) => {

		// create reusable transport method (opens pool of SMTP connections)
		var smtpTransport = nodemailer.createTransport({
		    service: "Gmail",
		    auth: {
		        user: "pechunka04@gmail.com",
		        pass: "simon1400"
		    }
		});

		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: "pechunka04@gmail.com", // sender address
		    to: "pechunka11@gmail.com", // list of receivers
		    subject: "Hello", // Subject line
		    text: "Hello world ✔", // plaintext body
		    html: "<b>Hello world ✔</b>" // html body
		}

		// send mail with defined transport object
		smtpTransport.sendMail(mailOptions, function(error, response){
		    if(error){
		        console.log('This error:     ' + error);
		    }else{
		        console.log("Message sent: " + response.message);
		    }

		    // if you don't want to use this transport object anymore, uncomment following line
		    //smtpTransport.close(); // shut down the connection pool, no more messages
		});

		req.body.state.id = req.body.id;
		// db.collection('user').insert(req.body.state)
		res.send(req.body.state)
	})

})


module.exports = router;