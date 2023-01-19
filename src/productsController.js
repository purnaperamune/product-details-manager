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

const updateProduct = (done) => {
    productService.updateProduct(done)
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