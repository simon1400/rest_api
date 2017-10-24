const router = require('express').Router();
const path = require('path');

const public = path.join(__dirname, '../../public');

router.get('/home', (req, res) => {
	res.sendFile(path.join(public, 'add_uni.html'));
})

module.exports = router;