const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/test',userController.test);

// router.get('/waka', (req, res) => {
//   res.json({status: 'Employeed Saved'});
// });

// router.get('/testdata',userController.testdata );

router.get('/list',userController.list );
router.post('/create',userController.create);
router.post('/check',userController.check);

module.exports = router;