const express = require('express')
const config = require("./config");
const app = express();
const productsRouter = require("./src")

const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDoc = YAML.load("./api-docs/swagger.yaml")

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/products/", productsRouter)

const server = app.listen(config.PORT, () => {
    console.log(`Listening to port ${config.PORT}`);
})

module.exports = server;