var db = require('../config/connection')
const collection = require('../config/collections')
var Promise = require('promise')
const { resolve, reject } = require('promise')
//const { resolve } = require('promise')
//const { ObjectId } = require('mongodb')
//const { response } = require('express')
var ObjectId = require("mongodb").ObjectId
//const { MongoClient, ObjectID } = require('mongodb');


module.exports={
    addProduct:(product,callBack)=>{
        db.get()
        .collection(collection.PRODUCT_COLLECTION)
        .insertOne(product).then((data)=>{
            console.log(data.insertedId)
            callBack(data.insertedId) 
        })
    },
    getAllProduct:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).find().toArray().then((products)=>{
                resolve(products)
            })
        })
    },
    deleteProduct:(proId)=>{
        return new Promise ((resolve,reject)=>{
            console.log(proId)
           db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id: new ObjectId(proId)}).then((response)=>{
            console.log(response)
            resolve(response)
           })
        })
    },
  /*  getProductDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id: new ObjectId(proId)}).then((product)=>{
                resolve(product);
            })
        })
    },

    updateProducts:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION)
            .updateOne({_id: new ObjectId(proId)},{$set:{
                Name:proDetails.Name,
                Catagory:proDetails.Catagory,
                prize:proDetails.prize
            }}).then((response)=>{
                resolve(response)
            })
        })
    }*/
}

