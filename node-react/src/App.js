const express = require('express');
const path = require("path");
const multer = require("multer");
const bodyParser = require('body-parser');

const app = express();
// importing routes
const userRouters = require('./routes/userRoute');
const itemRouters = require('./routes/itemRoute');
const picRouters = require('./routes/picRoute');
const messageRouters = require('./routes/messageRoute');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Route
app.use('/user',userRouters);
app.use('/item',itemRouters);
app.use('/pic',picRouters);
app.use('/message', messageRouters);


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})
