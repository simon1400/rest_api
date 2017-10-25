const router = require('express').Router();
const path = require('path');

const public = path.join(__dirname, '../../public');

router.get('/', (req, res) => {
	res.sendFile(path.join(public, 'lichny_cabinet.html'));
})

module.exports = router;