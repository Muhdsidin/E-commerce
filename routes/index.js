var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var ProductHelpers = require('../helpers/product-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProduct().then((products)=>{
    res.render('user/view-product',{products});
  })
  
});

module.exports = router;   

