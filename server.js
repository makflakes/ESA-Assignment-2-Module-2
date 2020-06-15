var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  User = require('./models/userModel'), //created model loading here
  CartItem = require('./models/cartModel'), //created model loading here
  ProductItem = require('./models/ProductModel'),

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;


const string1="";// add your database string here
mongoose.connect(string1,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var cartRoutes = require('./routes/cartRoutes'); //importing route
var userRoutes = require('./routes/userRoutes'); //importing route
var productRoutes = require('./routes/productRoutes');


cartRoutes(app); //register the route
userRoutes(app); //register the route
productRoutes(app);



app.listen(port);


console.log('shopping cart RESTful API server started on: ' + port);
