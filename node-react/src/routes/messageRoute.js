const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');


// add item 
router.post('/create',messageController.create);

router.get('/get',messageController.list);

router.post('/delete',messageController.delete);

module.exports = router;