const products = require("./products.json")
const fs = require('fs')

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
    console.log(id)
    // functoin to get ther product by id
    fs.readFile("src/products.json", (err, data) => {
        if(err){
            return done("ERROR")
        }
        const fileContent = JSON.parse(data)
        const prodId = parseInt(id)

        const productIds = fileContent.map(p => p.id)
        
        if(productIds.includes(prodId)){
            return done(undefined, fileContent[prodId-1])
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