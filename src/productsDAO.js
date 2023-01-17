const products = require("./products.json")
const fs = require('fs')

const getProducts = function(done){
    // function to get products
    fs.readFile("src/products.json", (err, data) => {
        if(err) {
            return done("ERROR")
        }
        const fileContent = JSON.parse(data)
        return done(undefined, fileContent)
    })
}

const getProductById = function(done){
    // functoin to get product by id
}

const insertProduct = function(done){
    // function to input products
}

const updateProduct = function(done){
    // function to update product
}

const deleteProduct = function(done){
    // function to delete products
}


module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}