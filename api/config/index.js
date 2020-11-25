require("dotenv").config()

const config = {
    authJwtSecret : process.env.AUTH_JWT_SECRET,
    port : process.env.PORT
}

module.exports = {config}