var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSchema = new Schema({
    productId: {
        type: String,
        required: 'Kindly enter the product-id'
    },

    productName: {
    type: String,
    required: 'Kindly enter the name of the product'
    },

    quantity: {
    type: Number,
    required: 'Kindly enter the available quantity'
    },
    amount: {
    type: Number,
    required: 'Kindly enter the price of the model'
    },
    username:{
        type:String,
        required:"username is missing"
    }


});
module.exports = mongoose.model('Cart', CartSchema);