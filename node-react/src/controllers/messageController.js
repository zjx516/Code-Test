var Message = require('../model/Message');
var sequelize = require('../config/mysql');

const controller = {}

controller.list = async (req, res) => {
  const data = await Message.findAll();
  res.json(data)
}

controller.create = async (req,res) => {
  // data
  const { itemId, username, content } = req.body;
  // create
  const data = await Message.create({
    itemId: itemId,
    username: username,
    content: content
  })
  .then(function(data){
    res.status(200).json({
      success: true,
      message: "Add Message Successfully",
      data: data
    });
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  }) 
}

controller.delete = async (req, res) => {
  const { itemId, username, content } = req.body;
  const data = await Message.destroy({
    where: {
      itemId: itemId,
      username: username,
      content: content
    }
  })
  .then(function(data){
    res.status(200).json({
      success: true,
      message: "Delete Message Successfully",
      data: data
    });
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  })
}


module.exports = controller;