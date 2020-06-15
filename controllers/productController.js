'use strict';


var mongoose = require('mongoose'),


Product = mongoose.model('Products');




exports.list_all_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send("Could not find products !");
    res.json(product);
  });
};




exports.create_a_product = function(req, res) {
  var prodIndex;
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {

   if (err){ 

    if(!req.body.from){
    return res.json({ message: '', error: '<from> is missing'});
    }
    else if(!req.body.to){
    return res.json({ message: '', error: '<to> is missing'});
    }
    else if(!req.body.text){
    return res.json({ message: '', error: '<text> is missing'});
    }
    else if(!req.body.from.minlength){
    return res.json({ message: '', error: '<from> is invalid'});
    }
    else if(!req.body.from.maxlength){
    return res.json({ message: '', error: '<from> is invalid'});
    }
    else if(req.body.to.length < req.body.to.minlength){
    return res.json({ message: '', error: '<to> is invalid'});
    }
    else if(!req.body.to.maxlength){
    return res.json({ message: '', error: '<to> is invalid'});
    }
    else if(!req.body.text.minlength){
    return res.json({ message: '', error: '<text> is invalid'});
    }
    else if(!req.body.text.maxlength){
    return res.json({ message: '', error: '<text> is invalid'});
    }
    else{
    return res.json({ message: '', error: 'Unexpected Error !'});
    } 
  }
    
  else{
   return res.json({ message: 'All parameters are valid', error: ''});
  }
  });
};


exports.read_a_product = function(req, res) {
  Product.find({productId:req.params.productId}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({productId: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {


  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};