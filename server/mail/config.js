const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
		    service: "Gmail",
		    auth: {
		        user: "pechunka04@gmail.com",
		        pass: "simon1400"
		    }
		});
