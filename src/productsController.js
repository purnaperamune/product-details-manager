const productService = require("./productsService");

const getProducts = (done) => {
    productService.getProducts(done)
}

const getProductById = (id, done) => {
    productService.getProductById(id, done)
}

const insertProduct = (productDetails, done) => {
    productService.insertProduct(productDetails, done)
}

const updateProduct = (productDetails, done) => {
    productService.updateProduct(productDetails, done)
}

const deleteProduct = (id, done) => {
    productService.deleteProduct(id, done)
}

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}