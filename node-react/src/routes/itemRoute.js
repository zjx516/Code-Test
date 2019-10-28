const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// list items
router.get('/list',itemController.list );

// add item 
router.post('/create',itemController.create);

// update item
router.post('/update',itemController.update);

// delete item
router.post('/delete',itemController.delete);


module.exports = router;