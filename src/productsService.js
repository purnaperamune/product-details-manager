const productDAO = require("./productsDAO")

const getProducts = function(done){
    productDAO.getProducts(done);
}

const getProductById = function(done){
    productDAO.getProductById(done);
}

const insertProduct = function(done){
    productDAO.saveProduct(done)
}

const updateProduct = function(done){
    productDAO.updateProduct(done)
}

const deleteProduct = function(done){
    productDAO.deleteProduct(done)
}

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}