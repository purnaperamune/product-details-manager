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


module.exports = router;
