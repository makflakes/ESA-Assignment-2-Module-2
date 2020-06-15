'use strict';


module.exports = function(app) {

var cart =require('../controllers/cartController')

app.route('/rest/v1/users/:username/cart')
.get(cart.list_all_cartitems)


app.route('/rest/v1/users/:username/cart/:productId')
.get(cart.read_a_cartitem)
.post(cart.create_a_cartitem)
.put(cart.update_a_cartitem)
.delete(cart.delete_a_cartitem);

};