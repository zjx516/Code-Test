const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();
const upload = require('../config/multerConfig');
const Resize = require('../config/resize');

var Item = require('../model/Item');

router.post('/upload', upload.single('image'), async function (req, res) {
  const {id} = req.body;
  const imagePath = path.join(__dirname, '../../appnode/public/images');
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
  const filename = await fileUpload.save(req.file.buffer);
  
  Item.update({
    photo: filename
  }, {
    where: {
      id: id
    }
  })
  .then(function(data){
    res.status(200).json({
      success: true,
      message: "Update Successfully",
      data: data
    });
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  })

});


module.exports = router;