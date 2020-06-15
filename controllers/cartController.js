'use strict';


var mongoose = require('mongoose'),

CartItem = mongoose.model('Cart');



exports.list_all_cartitems = function(req, res) {
    CartItem.find({username:req.params.username}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  
  
  
  exports.create_a_cartitem = function(req, res) {
    var new_cartItem = new CartItem(req.body);
    new_cartItem.save(function(err, cartItem) {
      if (err)
        res.send(err);
      res.json(cartItem);
    });
  };

  
exports.read_a_cartitem = function(req, res) {
    CartItem.find({productId:req.params.productId,username:req.params.username}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  
  exports.update_a_cartitem = function(req, res) {
    CartItem.findOneAndUpdate({productId: req.params.productId,username:req.params.username}, req.body, {new: true}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  
  exports.delete_a_cartitem = function(req, res) {
  
  
    CartItem.remove({
      productId: req.params.productId,
      username:req.params.username
    }, function(err, product) {
      if (err)
        res.send(err);
      res.json({ message: 'Product successfully deleted' });
    });
  };