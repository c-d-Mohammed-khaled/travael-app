//const dotenv = require('dotenv');

//dotenv.config();
// Get Api credentials from Environment Variables
const apiKeys = () => {
    const keys = {
        geoNamesKey: process.env.geoNames_USERNAME,
        weatherBitKey: process.env.weatherBit_apiKEY,
        pixaBayKey: process.env.pixaBay_apiKEY
    }
    return keys
}

module.exports = apiKeys;