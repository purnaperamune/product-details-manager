const productService = require("./productsService");

const getProducts = (done) => {
    productService.getProducts(done)
}

const getProductById = (id, done) => {
    productService.getProductById(id, done)
}

const insertProduct = (done) => {
    productService.insertProduct(done)
}

const updateProduct = (done) => {
    productService.updateProduct(done)
}

const deleteProduct = (done) => {
    productService.deleteProduct(done)
}

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}