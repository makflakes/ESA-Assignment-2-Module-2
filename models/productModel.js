'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ProductSchema = new Schema({
    
    from: {
      type: String,
      minlength: 6,
      maxlength: 16,
      required: "Parameter 'from' is missing",
      
    },
    to: {
        type: String,
        minlength: 6,
        maxlength: 16,
        required: "Parameter 'to' is missing",
        
      },
    text: {
    type: String,
    minlength: 1,
    maxlength: 120,
    required: "Parameter 'text' is missing",
    
    },
    
    
    
  });

module.exports = mongoose.model('Products', ProductSchema);