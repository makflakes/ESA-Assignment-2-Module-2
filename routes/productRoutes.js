'use strict';
module.exports = function(app) {

var product = require('../controllers/productController');

// todoList Routes
app.route('/rest/v1/messages')
.get(product.list_all_products)
.post(product.create_a_product);


app.route('/rest/v1/messages/:productId')
.get(product.read_a_product)
.put(product.update_a_product)
.delete(product.delete_a_product);



 
};