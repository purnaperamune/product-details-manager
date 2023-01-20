const products = require("./products.json")
const fs = require('fs')
const e = require("express")

const getProducts = function(done){
    // function to get all products
    fs.readFile("src/products.json", (err, data) => {
        if(err) {
            return done("ERROR")
        }
        const fileContent = JSON.parse(data)
        return done(undefined, fileContent)
    })
}

const getProductById = function(id, done){
    // functoin to get the product by id
    fs.readFile("src/products.json", (err, data) => {
        if(err){
            return done("ERROR")
        }
        const fileContent = JSON.parse(data)
        const prodId = parseInt(id)
        const productIds = fileContent.map(p => p.id)
        
        if(productIds.includes(prodId)){
            const index = fileContent.findIndex((obj) => obj.id === prodId)
            return done(undefined, fileContent[index])
        }
        else{
            return done("Product Id does not exist!")
        }
    })
}

const insertProduct = function(productDetails, done){
    // function to input products
    fs.readFile("src/products.json", (err, data) => {
        const prodId = parseInt(productDetails.id)
        const fileContent = JSON.parse(data)
        const productIds = fileContent.map(p => p.id)

        if(productIds.includes(prodId)){
            return done("Product Id already exists!")
        }
        else{
            fileContent.push(productDetails)
            fs.writeFile("src/products.json", JSON.stringify(fileContent), (err, count) => {
                if(err){
                    return done("ERROR")
                }
                else{
                    return done(undefined, fileContent)
                }
            })
        }
    })
}

const updateProduct = function(productDetails, done){
    // function to update existing product
    fs.readFile("src/products.json", (err, data) => {
        const prodId = parseInt(productDetails.id)
        const fileContent = JSON.parse(data)
        const productIds = fileContent.map(p => p.id)
        
        if(productIds.includes(prodId)){
            const index = fileContent.findIndex((obj) => obj.id === prodId);
            fileContent[index] = productDetails
            fs.writeFile("src/products.json", JSON.stringify(fileContent), (err, count) => {
                if(err){
                    return done("ERROR")
                }
                else{
                    return done(undefined, fileContent)
                }
            })
        }
        else{
            return done("Product Id does not exist!")
        }
        
    })
}

const deleteProduct = function(id, done){
    // function to delete products
    fs.readFile("src/products.json", (err, data) => {
        if(err){
            return done("ERROR")
        }
        const fileContent = JSON.parse(data)
        const prodId = parseInt(id)
        const productIds = fileContent.map(p => p.id)
        
        if(productIds.includes(prodId)){
            const index = fileContent.findIndex((obj) => obj.id === prodId);
            fileContent.splice(index, 1)
            fs.writeFile("src/products.json", JSON.stringify(fileContent), (err, count) => {
                if(err){
                    return done("ERROR")
                }
                else{
                    return done(undefined, fileContent)
                }
            })
        }
        else{
            return done("Product Id does not exist!")
        }
    })
}


module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}