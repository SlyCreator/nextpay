require("dotenv").config();

const config = () => {
  return{
    APP_NAME:process.env.APP_NAME,
    APP_ENV:process.env.APP_ENV,
    PORT:process.env.PORT || 9090,
    API_VERSION: process.env.API_VERSION,
  }
}

module.exports = config
