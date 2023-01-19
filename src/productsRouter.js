const express = require('express')
const router = express.Router();
const productsController = require('./productsController');

router.get("/", (req, res) => {
    try{
        productsController.getProducts((err, results) => {
            if (err){
                return res.status(400).send(err)
            }
            else{
                return res.status(200).send(
                    {
                        Status: "Success",
                        data: results
                    })
                }
            });
        } catch (err){
            res.status(400).send(err)
        }
    });

router.get("/:productId", (req, res) => {
    try{
        const prodcutId = req.params.productId;
        productsController.getProductById(prodcutId, (err, result) => {
            if(err){
                return res.status(400).send(err)
            }
            else{
                return res.status(200).send({
                    Status: "Success",
                    data: result
                })
            }
        })
    } catch (err){
        res.status(400).send(err)
    }
})

router.post("/", (req, res) => {
    try{
        const productDetails = req.body;
        console.log(productDetails)
        productsController.insertProduct(productDetails, (err, result) => {
            if(err){
                return res.status(400).send(err)
            }
            else{
                return res.status(200).send({
                    Status: "Success",
                    data: result
                })
            }
        })
    } catch{
        res.status(400).send(err)
    }
})

router.put("/", (req, res) => {
    try{
        const productDetails = req.body;
        console.log(productDetails)
        productsController.updateProduct(productDetails, (err, result) => {
            if(err){
                return res.status(400).send(err)
            }
            else{
                return res.status(200).send({
                    Status: "Success",
                    data: result
                })
            }
        })
    } catch{
        res.status(400).send(err)
    }
})

router.delete("/:productId", (req, res) => {
    try{
        const prodcutId = req.params.productId;
        productsController.deleteProduct(prodcutId, (err, result) => {
            if(err){
                return res.status(400).send(err)
            }
            else{
                return res.status(200).send({
                    Status: "Success",
                    data: result
                })
            }
        })
    } catch{
        res.status(400).send(err)
    }
})


module.exports = router;
