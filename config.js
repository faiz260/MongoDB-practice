require('dotenv').config();

console.log(process.env.PASSWORD)

module.exports = {
    PORT: process.env.PORT || 3002,
    NODE_ENV: process.env.NODE_ENV || development
}