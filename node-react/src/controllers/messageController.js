var Message = require('../model/Message');
var sequelize = require('../model/mysql');

const controller = {}

controller.list = async (req, res) => {
  const data = await Message.findAll();
  res.json(data)
}

// controller.list = async (req, res) => {
//   console.log("uuuuuuuuuuuuusssss", req.body);
//   const data = await Message.findAll({
//     where: {
//       itemId: req.body.itemId
//     }
//   })
//   .then(function(data){
//     res.json(data);
//   })
//   .catch(error =>{
//     console.log("Error "+error)
//     return error;
//   })
// }

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


module.exports = controller;