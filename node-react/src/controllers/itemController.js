var Item = require('../model/Item');
var sequelize = require('../config/mysql');

const controller = {}


controller.list = async (req, res) => {
    const data = await Item.findAll();
    res.json(data)
}

controller.update = async (req, res) => {
  const { id, name, price, description, expiryDate, status } = req.body;
  Item.update({
    name: name,
    price: price,
    description: description,
    expiryDate: expiryDate,
    status: status
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
}

controller.create = async (req,res) => {
  // data
  const { name, price, description, expiryDate, status } = req.body;
  // create
  const data = await Item.create({
    name: name,
    price: price,
    description: description,
    expiryDate: expiryDate,
    status: status
  })
  .then(function(data){
    res.status(200).json({
      success: true,
      message: "Add Item Successfully",
      data: data
    });
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  }) 
}

controller.delete = async (req, res) => {
  const {itemId} = req.body;
  Item.destroy({
    where: {
      id: itemId
    }
  })
  .then(function(data){
    res.status(200).json({
      success: true,
      message: "Delete Successfully",
      data: data
    });
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  })
}


module.exports = controller;