const { response } = require('express');
var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var ProductHelpers = require('../helpers/product-helpers')




/* GET users listing. */
router.get('/', function(req, res, next) {
  ProductHelpers.getAllProduct().then((products)=>{
  console.log(products)
    res.render("admin/view-product",{admin:true,products})
  })

});




router.get("/add-product",function(req,res){//this come from hbs file fr starting
  res.render('admin/add-product')
});

router.post("/add-product",(req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)

 ProductHelpers.addProduct(req.body,(id)=>{
   console.log(id) 
   let image = req.files.Image
   

   console.log(image)
   image.mv('./public/product-images/'+id+'.jpg',(err)=>{

     if(!err){
       res.render('admin/add-product')
     }
     else{
       console.log(err)
     }
   })
   
 })
})






router.get("/delete-product/:id",(req,res)=>{
  let proId = req.params.id
 // console.log(proId)
  productHelpers.deleteProduct(proId).then((response)=>{
    res.redirect("/admin")

  })
 
})





 
/* ya allah */



module.exports = router;

