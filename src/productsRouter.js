const express = require('express')
const router = express.Router();
const productsController = require('./productsController');

router.get("/", (req, res) => {
    try {
        productsController.getProducts((err, results) => {
            if (err){
                return res.status(400).send(err)
            }
            else {
                return res.status(200).send(
                    {
                        STATUS:"OK",
                        data:results
                    })
                }
            });
        } catch (err) {
            res.status(400).send(err)
        }
    });


module.exports = router;
