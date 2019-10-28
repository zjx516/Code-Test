var User = require('../model/User');
var sequelize = require('../model/mysql');


const controller = {}

controller.list = async (req, res) => {
    const data = await User.findAll();
    res.json(data)
}

controller.check = async (req, res) => {
  const { username, password } = req.body;
  const data = await User.findOne({
    where: {
      username: username,
      password: password
    }
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  })
  // return res
  if (data == null) {
    res.status(200).json({
      success: false,
      message: "Login Failure",
      data: data
    });
  }else {
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      data: data
    });
  }
}

controller.create = async (req,res) => {
  // data
  const { username, password, email, gender, role } = req.body;
  // create
  const data = await User.create({
    username: username,
    password: password,
    email: email,
    gender: gender,
    role: role
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  })
  // return res
  res.status(200).json({
    success: true,
    message: "Register Successfully",
    data: data
  });
}


module.exports = controller;