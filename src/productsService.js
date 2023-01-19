const productDAO = require("./productsDAO")

const getProducts = function(done){
    productDAO.getProducts(done);
}

const getProductById = function(id, done){
    productDAO.getProductById(id, done);
}

const insertProduct = function(productDetails, done){
    productDAO.insertProduct(productDetails, done)
}

const updateProduct = function(done){
    productDAO.updateProduct(done)
}

const deleteProduct = function(id, done){
    productDAO.deleteProduct(id, done)
}

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}